"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import CustomFormField from "./CustomFormField";
import { FormFieldType } from "./types";

const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Olá, tudo bem? 👏</h1>
          <p className="text-dark-700">Agende seu atendimento.</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name=""
          label=""
          placeholder=""
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
