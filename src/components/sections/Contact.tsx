import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/container';
import { SectionHeading } from '../ui/section-heading';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    const serviceId = "service_b9wt409";
    const templateId = "template_0j2raem";
    const publicKey = "twjfcIalycanNTis5";

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast({
          title: t("contact.form.successTitle"),
          description: t("contact.form.successDescription"),
        });
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: t("contact.form.errorTitle"),
          description: t("contact.form.errorDescription"),
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: t("contact.info.email"),
      value: "Info@al-sakrgroup.com",
      link: "mailto:Info@al-sakrgroup.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t("contact.info.phone"),
      value: "+20 123 456 7890",
      link: "tel:+201234567890",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t("contact.info.address"),
      value: "Cairo, Egypt",
      link: "https://maps.google.com/?q=Cairo,Egypt",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/50">
      <Container>
        <SectionHeading
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-aos="fade-up">
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">{t("contact.info.title")}</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{info.label}</p>
                      <a
                        href={info.link}
                        className="text-lg hover:text-primary transition-colors"
                        target={info.label === t("contact.info.address") ? "_blank" : undefined}
                        rel={info.label === t("contact.info.address") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">{t("contact.businessHours.title")}</h3>
                <p className="text-muted-foreground">{t("contact.businessHours.mondayFriday")}</p>
                <p className="text-muted-foreground">{t("contact.businessHours.saturday")}</p>
                <p className="text-muted-foreground">{t("contact.businessHours.sunday")}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">{t("contact.form.title")}</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.name")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.namePlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.email")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.emailPlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.message")}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("contact.form.messagePlaceholder")}
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
