import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { enquiryOptions, formNotice } from "@/lib/site-data";

const schema = z.object({
  fullName: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your full name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone number must be less than 30 characters" })
    .optional()
    .or(z.literal("")),
  matter: z.string().nonempty({ message: "Please select an area of assistance" }),
  description: z
    .string()
    .trim()
    .nonempty({ message: "Please provide a brief description" })
    .max(1500, { message: "Description must be less than 1500 characters" }),
  preferredContact: z.enum(["Email", "Phone", "WhatsApp"]),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "mt-2 block h-12 w-full border border-input bg-background px-4 text-[0.9375rem] text-charcoal transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none";
const labelClass = "block text-[0.8125rem] font-medium tracking-wide text-navy";
const errorClass = "mt-2 block text-xs text-destructive";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { preferredContact: "Email", matter: "" },
  });

  const onSubmit = async (_values: FormValues) => {
    // Enquiries are not yet transmitted anywhere. Connect this to the firm's
    // preferred inbox or a backend once the contact address is supplied.
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="border border-gold/50 bg-ivory p-8 text-center sm:p-10"
      >
        <CheckCircle2 className="mx-auto size-9 text-gold" strokeWidth={1.25} aria-hidden="true" />
        <h3 className="mt-5 text-xl text-navy">Thank you for your enquiry</h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your message has been recorded. A member of the firm will review the
          information provided and respond using your preferred method of contact.
          Please note that submitting this form does not create a lawyer-client
          relationship.
        </p>
        <Button
          type="button"
          variant="quiet"
          size="lg"
          className="mt-7"
          onClick={() => setSubmitted(false)}
        >
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="border border-border bg-card p-6 sm:p-8 lg:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className={labelClass} htmlFor="fullName">
            Full Name <span className="text-gold-dark">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName ? (
            <span id="fullName-error" className={errorClass}>
              {errors.fullName.message}
            </span>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email Address <span className="text-gold-dark">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <span id="email-error" className={errorClass}>
              {errors.email.message}
            </span>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            {...register("phone")}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="matter">
            What do you need assistance with? <span className="text-gold-dark">*</span>
          </label>
          <select
            id="matter"
            className={fieldClass}
            aria-invalid={!!errors.matter}
            aria-describedby={errors.matter ? "matter-error" : undefined}
            {...register("matter")}
          >
            <option value="">Select a legal matter or service</option>
            {enquiryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.matter ? (
            <span id="matter-error" className={errorClass}>
              {errors.matter.message}
            </span>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="description">
            Brief Description of Your Matter <span className="text-gold-dark">*</span>
          </label>
          <textarea
            id="description"
            rows={5}
            className={`${fieldClass} h-auto py-3 leading-relaxed`}
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? "description-error" : undefined}
            {...register("description")}
          />
          {errors.description ? (
            <span id="description-error" className={errorClass}>
              {errors.description.message}
            </span>
          ) : null}
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={labelClass}>Preferred Contact Method</legend>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
            {(["Email", "Phone", "WhatsApp"] as const).map((method) => (
              <label
                key={method}
                className="inline-flex min-h-11 items-center gap-2.5 text-sm text-charcoal"
              >
                <input
                  type="radio"
                  value={method}
                  className="size-4 accent-[var(--gold)]"
                  {...register("preferredContact")}
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <p className="mt-7 flex gap-3 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
        <ShieldAlert className="mt-0.5 size-4 shrink-0 text-gold-dark" aria-hidden="true" />
        {formNotice}
      </p>

      <Button type="submit" variant="gold" size="xl" className="mt-7 w-full sm:w-auto" disabled={isSubmitting}>
        Request a Consultation
      </Button>
    </form>
  );
}
