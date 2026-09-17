"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(name: string, email: string, message: string): Errors {
  const errors: Errors = {};
  if (!name.trim() || name.trim().length < 2) {
    errors.name = "Escribe tu nombre (mín. 2 caracteres).";
  }
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Ingresa un correo válido.";
  }
  if (!message.trim() || message.trim().length < 10) {
    errors.message = "Cuéntanos un poco más (mín. 10 caracteres).";
  }
  return errors;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("general");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(name, email, message);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Stub: no backend — success local
    setSuccess(true);
    setName("");
    setEmail("");
    setTopic("general");
    setMessage("");
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-[var(--gold)]/40 bg-[var(--bg-card)] p-8 text-center">
        <p className="font-display text-2xl text-[var(--cream)]">Mensaje recibido</p>
        <p className="mt-3 text-sm text-[var(--muted)]">
          Gracias por escribirnos. Este es un envío de demostración (stub). En
          producción conectaremos el formulario a tu correo o CRM.
        </p>
        <Button type="button" className="mt-6" variant="secondary" onClick={() => setSuccess(false)}>
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--cream)] outline-none transition placeholder:text-[var(--muted-2)] focus:border-[var(--gold)]";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-[var(--muted)]">Nombre</label>
        <input id="name" className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" autoComplete="name" />
        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-[var(--muted)]">Correo</label>
        <input id="email" type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" autoComplete="email" />
        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="topic" className="mb-2 block text-sm text-[var(--muted)]">Tema</label>
        <select id="topic" className={field} value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="general">Consulta general</option>
          <option value="cursos">Cursos</option>
          <option value="asesorias">Asesorías</option>
          <option value="tienda">Tienda / productos</option>
          <option value="alianzas">Alianzas</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-[var(--muted)]">Mensaje</label>
        <textarea id="message" rows={5} className={field} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="¿En qué podemos ayudarte?" />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
      </div>
      <Button type="submit" className="w-full sm:w-auto">Enviar mensaje</Button>
    </form>
  );
}
