import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/container';
import { SectionHeading } from '../ui/section-heading';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
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
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

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
      group: t("contact.info.mainOffice.title"),
      items: [
        {
          icon: <MapPin className="h-5 w-5" />,
          label: t("contact.info.address"),
          value: t("contact.info.mainOffice.address"),
          link: "https://maps.google.com/?q=80+km+Cairo-Alexandria+Desert+road+Sadat+Egypt",
        },
        {
          icon: <Mail className="h-5 w-5" />,
          label: t("contact.info.email"),
          value: "info@alsakrgroup.net",
          link: "mailto:info@alsakrgroup.net",
        },
        {
          icon: <Phone className="h-5 w-5" />,
          label: t("contact.info.phone"),
          value: "+20 10 4010 6194",
          link: "tel:+201040106194",
        },
        {
          icon: <Mail className="h-5 w-5" />,
          label: t("contact.info.website"),
          value: "www.alsakrgroup.net",
          link: "https://www.alsakrgroup.net",
        },
      ],
    },
    {
      group: t("contact.info.marketingSales.title"),
      items: [
        {
          icon: <Mail className="h-5 w-5" />,
          label: t("contact.info.contactPerson"),
          value: "Dr. Mahmoud Sakr",
          link: null,
        },
        {
          icon: <Mail className="h-5 w-5" />,
          label: t("contact.info.email"),
          value: "director@alsakrgroup.net",
          link: "mailto:director@alsakrgroup.net",
        },
        {
          icon: <Phone className="h-5 w-5" />,
          label: t("contact.info.phone"),
          value: "+20 10 4010 6194",
          link: "tel:+201040106194",
        },
      ],
    },
    {
      group: t("contact.info.financeAccounts.title"),
      items: [
        {
          icon: <Mail className="h-5 w-5" />,
          label: t("contact.info.contactPerson"),
          value: "Eng. Isam Sakr",
          link: null,
        },
        {
          icon: <Mail className="h-5 w-5" />,
          label: t("contact.info.email"),
          value: "finance@alsakrgroup.net",
          link: "mailto:finance@alsakrgroup.net",
        },
        {
          icon: <Phone className="h-5 w-5" />,
          label: t("contact.info.phone"),
          value: "+20 10 9093 9105",
          link: "tel:+201090939105",
        },
      ],
    },
    {
      group: t("contact.info.italyHeadOffice.title"),
      items: [
        {
          icon: <MapPin className="h-5 w-5" />,
          label: t("contact.info.address"),
          value: t("contact.info.italyHeadOffice.address"),
          link: "https://maps.google.com/?q=Via+Valleambrosia+75+20089+Rozzano+Milano+Italy",
        },
        {
          icon: <Mail className="h-5 w-5" />,
          label: t("contact.info.email"),
          value: "italy@alsakrgroup.net",
          link: "mailto:italy@alsakrgroup.net",
        },
        {
          icon: <Phone className="h-5 w-5" />,
          label: t("contact.info.phone"),
          value: "+39 347 869 1876",
          link: "tel:+393478691876",
        },
      ],
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-muted/20 to-white dark:from-muted/40 dark:to-gray-900"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Container>
        <SectionHeading
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          className="text-center mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            className="shadow-xl rounded-xl bg-white dark:bg-gray-800 border-none transform hover:scale-[1.01] transition-transform duration-300"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">
                {t("contact.info.title")}
              </h3>

              <div className="space-y-2">
                {contactInfo.map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="border-b border-muted last:border-b-0"
                  >
                    <button
                      className="w-full flex justify-between items-center py-3 text-left group"
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === group.group ? null : group.group
                        )
                      }
                    >
                      <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {group.group}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 ${
                          openAccordion === group.group ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openAccordion === group.group
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pb-4 space-y-3">
                        {group.items.map((info, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-3">
                              {info.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-muted-foreground">
                                {info.label}
                              </p>
                              {info.link ? (
                                <a
                                  href={info.link}
                                  className="text-base text-foreground hover:text-primary hover:underline transition-all duration-200"
                                  target={
                                    info.label === t("contact.info.address") ||
                                    info.label === t("contact.info.website")
                                      ? "_blank"
                                      : undefined
                                  }
                                  rel={
                                    info.label === t("contact.info.address") ||
                                    info.label === t("contact.info.website")
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <p className="text-base text-foreground">
                                  {info.value}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-primary dark:text-primary-foreground">
                  {t("contact.businessHours.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("contact.businessHours.mondayFriday")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("contact.businessHours.saturday")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("contact.businessHours.sunday")}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="shadow-xl rounded-xl bg-white dark:bg-gray-800 border-none transform hover:scale-[1.01] transition-transform duration-300"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">
                {t("contact.form.title")}
              </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground">
                          {t("contact.form.name")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.namePlaceholder")}
                            className="border-muted focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 rounded-lg"
                            {...field}
                          />
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
                        <FormLabel className="text-sm font-medium text-foreground">
                          {t("contact.form.email")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.emailPlaceholder")}
                            className="border-muted focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 rounded-lg"
                            {...field}
                          />
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
                        <FormLabel className="text-sm font-medium text-foreground">
                          {t("contact.form.message")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("contact.form.messagePlaceholder")}
                            className="min-h-[120px] border-muted focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 rounded-lg"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 rounded-lg shadow-md active:scale-95"
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