"use client";

import Link from "next/link";
import React, { useMemo, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Check,
  CreditCard,
  Crown,
  Lock,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wand2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Monetix Landing — Pro (v3)
 * - Copy persuasiva e objetiva
 * - Mais visual / menos "explicação do óbvio"
 * - Responsividade forte (carrossel mobile, grids desktop)
 * - Cards com altura consistente (h-full + flex-col + mt-auto)
 * - Animações suaves no scroll (Reveal)
 */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <Hero />
        <Numbers />

        <FeaturedCreators />

        <Benefits />

        <DualPitch />

        <LaunchPlan />

        <FAQ />

        <FinalCTA />

        <Footer />
      </main>
    </div>
  );
}

/* -------------------------------- Header -------------------------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl text-background"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--brand, 142 76% 45%)), hsl(var(--brand2, 196 86% 55%)))",
            }}
          >
            M
          </span>
          Monetix
          <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">
            beta
          </Badge>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a
            href="#creators"
            className="text-muted-foreground hover:text-foreground"
          >
            Criadores
          </a>
          <a
            href="#benefits"
            className="text-muted-foreground hover:text-foreground"
          >
            Benefícios
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">
              Criar conta <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------- Hero -------------------------------- */

function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // parallax sutil
  const y = useTransform(scrollYProgress, [0, 1], [0, -44]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.65]);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 sm:pt-14">
      <div
        ref={heroRef}
        className="relative overflow-hidden rounded-3xl border border-border/60 p-6 sm:p-10 md:p-12"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(900px circle at 15% 15%, hsl(var(--brand, 142 76% 45%) / 0.22), transparent 45%), radial-gradient(900px circle at 85% 35%, hsl(var(--brand2, 196 86% 55%) / 0.20), transparent 40%), linear-gradient(180deg, hsl(var(--muted) / 0.55), hsl(var(--background)))",
            }}
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex flex-wrap items-center gap-2"
            >
              <Badge variant="secondary">Assinatura mensal por criador</Badge>
              <Badge variant="secondary">Vitrine premium</Badge>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                Acesso enquanto ativo
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 font-bold tracking-tight"
              style={{
                fontSize: "clamp(2.1rem, 4vw, 3.9rem)",
                lineHeight: 1.05,
              }}
            >
              Coloque seu preço.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, hsl(var(--brand, 142 76% 45%)), hsl(var(--brand2, 196 86% 55%)))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Faça vender.
              </span>
              <br />
              Deixe o céu ser o limite.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base"
            >
              Monetix transforma audiência em receita recorrente com uma experiência
              premium — direta, bonita e confiável.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="sm:min-w-[220px]">
                <Link href="/signup">
                  Criar minha página <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="sm:min-w-[220px]"
              >
                <Link href="/creators">
                  Explorar criadores <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              <MiniPill icon={<TrendingUp className="h-4 w-4" />} text="Recorrência mensal" />
              <MiniPill icon={<Crown className="h-4 w-4" />} text="Marca premium" />
              <MiniPill icon={<ShieldCheck className="h-4 w-4" />} text="Privacidade" />
            </div>
          </div>

          <div className="md:justify-self-end">
            <Reveal>
              <CreatorPreview />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreatorPreview() {
  return (
    <Card className="border-border/60 bg-background/70 backdrop-blur">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-2xl border border-border/60 bg-muted"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--brand, 142 76% 45%) / 0.35), hsl(var(--brand2, 196 86% 55%) / 0.25))",
              }}
            />
            <div>
              <CardTitle className="text-lg">Seu Perfil</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">@seunome</p>
            </div>
          </div>
          <Badge variant="secondary">Mensal</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="text-3xl font-bold">
          R$ 29,90{" "}
          <span className="text-sm font-normal text-muted-foreground">/mês</span>
        </div>

        <div className="space-y-2 text-sm">
          <LineItem text="Conteúdo exclusivo para assinantes" />
          <LineItem text="Acesso contínuo enquanto ativo" />
          <LineItem text="Cancelar quando quiser" />
        </div>

        <div className="flex gap-2">
          <Button className="w-full">Assinar</Button>
          <Button className="w-full" variant="secondary">
            Ver perfil
          </Button>
        </div>

        <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 text-sm text-muted-foreground">
          “Você decide o preço. A Monetix entrega a experiência.”
        </div>
      </CardContent>
    </Card>
  );
}

function LineItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <BadgeCheck className="h-4 w-4 text-muted-foreground" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

/* -------------------------------- Numbers -------------------------------- */

function Numbers() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <Reveal>
        <div className="grid gap-4 rounded-3xl border border-border/60 bg-muted/30 p-5 sm:p-6 md:grid-cols-3">
          <Stat title="Modelo" value="Mensal por criador" icon={<CreditCard className="h-5 w-5" />} />
          <Stat title="Experiência" value="Premium e direta" icon={<Wand2 className="h-5 w-5" />} />
          <Stat title="Confiança" value="Privacidade" icon={<Lock className="h-5 w-5" />} />
        </div>
      </Reveal>
    </section>
  );
}

function Stat(props: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-background/50 p-4">
      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-background"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--brand, 142 76% 45%)), hsl(var(--brand2, 196 86% 55%)))",
        }}
      >
        {props.icon}
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{props.title}</div>
        <div className="font-semibold">{props.value}</div>
      </div>
    </div>
  );
}

/* --------------------------- Featured creators --------------------------- */

function FeaturedCreators() {
  const creators = useMemo(
    () => [
      { name: "Luna", handle: "@luna", price: "R$ 19,90", tag: "Novo" },
      { name: "Kai", handle: "@kai", price: "R$ 29,90", tag: "Popular" },
      { name: "Maya", handle: "@maya", price: "R$ 39,90", tag: "Em alta" },
      { name: "Noah", handle: "@noah", price: "R$ 24,90", tag: "Destaque" },
      { name: "Ava", handle: "@ava", price: "R$ 14,90", tag: "Starter" },
      { name: "Leo", handle: "@leo", price: "R$ 49,90", tag: "Premium" },
    ],
    []
  );

  return (
    <section id="creators" className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
      <SectionHeader
        title="Criadores em destaque"
        subtitle="Uma assinatura por criador. Você escolhe quem apoiar."
        cta={{ href: "/creators", label: "Ver todos" }}
      />

      {/* mobile: carrossel snap */}
      <div className="mt-6 md:hidden">
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {creators.map((c, i) => (
            <div key={c.handle} className="min-w-[82%] snap-start">
              <Reveal delay={i * 0.03}>
                <CreatorCard creator={c} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* desktop: grid */}
      <div className="mt-6 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 items-stretch [grid-auto-rows:1fr]">
        {creators.map((c, i) => (
          <Reveal key={c.handle} delay={i * 0.03}>
            <CreatorCard creator={c} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CreatorCard({
  creator,
}: {
  creator: { name: string; handle: string; price: string; tag: string };
}) {
  return (
    <Card className="h-full flex flex-col overflow-hidden border-muted/60 transition hover:-translate-y-0.5 hover:shadow-xl">
      <div
        className="h-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--brand, 142 76% 45%) / 0.35), hsl(var(--brand2, 196 86% 55%) / 0.25))",
        }}
      />
      <CardHeader className="-mt-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="h-14 w-14 rounded-2xl border border-border/60 bg-background"
              style={{ boxShadow: "0 10px 35px rgba(0,0,0,0.25)" }}
            />
            <div>
              <CardTitle className="text-lg">{creator.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{creator.handle}</p>
            </div>
          </div>
          <Badge variant="secondary">{creator.tag}</Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="text-sm text-muted-foreground">Assinatura</div>
        <div className="text-2xl font-bold">
          {creator.price}{" "}
          <span className="text-sm font-normal text-muted-foreground">/mês</span>
        </div>

        <div className="mt-auto pt-5 flex gap-2">
          <Button className="w-full">Assinar</Button>
          <Button className="w-full" variant="secondary" asChild>
            <Link href="/creators">Ver perfil</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* -------------------------------- Benefits -------------------------------- */

function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
      <SectionHeader
        title="O que faz a Monetix vender mais"
        subtitle="Menos ruído. Mais desejo. Mais confiança."
      />

      <div className="mt-6 grid gap-4 md:grid-cols-3 items-stretch [grid-auto-rows:1fr]">
        <Reveal>
          <BenefitCard
            icon={<TrendingUp className="h-5 w-5" />}
            title="Conversão"
            desc="Uma vitrine premium que incentiva a assinatura."
            bullets={["Copy direta", "CTA forte", "UX mobile-first"]}
          />
        </Reveal>
        <Reveal delay={0.06}>
          <BenefitCard
            icon={<Star className="h-5 w-5" />}
            title="Valor percebido"
            desc="Exclusividade que o assinante sente no primeiro clique."
            bullets={["Páginas consistentes", "Layout alinhado", "Sem fricção"]}
          />
        </Reveal>
        <Reveal delay={0.12}>
          <BenefitCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Confiança"
            desc="Privacidade e controle para reduzir compartilhamento indevido."
            bullets={["Acesso controlado", "Experiência confiável", "Marca forte"]}
          />
        </Reveal>
      </div>
    </section>
  );
}

function BenefitCard(props: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <Card className="h-full flex flex-col border-muted/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl text-background"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--brand, 142 76% 45%)), hsl(var(--brand2, 196 86% 55%)))",
            }}
          >
            {props.icon}
          </span>
          {props.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground">{props.desc}</p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {props.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <Button asChild className="w-full">
            <Link href="/signup">
              Começar agora <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ------------------------------- Dual pitch ------------------------------- */

function DualPitch() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
      <div className="grid gap-4 md:grid-cols-2 items-stretch [grid-auto-rows:1fr]">
        <Reveal>
          <PitchCard
            title="Para criadores"
            subtitle="Você manda no preço. Você manda na marca."
            bullets={[
              "Defina seu valor mensal",
              "Página com cara de produto grande",
              "Recorrência todo mês",
            ]}
            cta={{ label: "Criar minha página", href: "/signup" }}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <PitchCard
            title="Para assinantes"
            subtitle="Assinar é fácil. A experiência é premium."
            bullets={[
              "Mensal por criador",
              "Acesso enquanto ativo",
              "Cancelamento simples",
            ]}
            cta={{ label: "Explorar criadores", href: "/creators" }}
            secondary
          />
        </Reveal>
      </div>
    </section>
  );
}

function PitchCard(props: {
  title: string;
  subtitle: string;
  bullets: string[];
  cta: { label: string; href: string };
  secondary?: boolean;
}) {
  return (
    <Card className="h-full flex flex-col border-muted/60">
      <CardHeader>
        <CardTitle className="text-xl">{props.title}</CardTitle>
        <p className="mt-2 text-sm text-muted-foreground">{props.subtitle}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {props.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <Button
            asChild
            className="w-full"
            variant={props.secondary ? "secondary" : "default"}
          >
            <Link href={props.cta.href}>
              {props.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ------------------------------ Launch plan ------------------------------ */

function LaunchPlan() {
  const steps = [
    {
      n: "01",
      title: "Crie sua página",
      desc: "Entre com presença. Visual premium que chama clique.",
      tag: "Brand-ready",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      n: "02",
      title: "Defina seu preço",
      desc: "Preço claro. Oferta clara. Conversão mais rápida.",
      tag: "Your pricing",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      n: "03",
      title: "Faça vender todo mês",
      desc: "Assinatura por criador com recorrência de verdade.",
      tag: "Recurring",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
      <SectionHeader
        title="Do perfil ao primeiro assinante"
        subtitle="Sem texto inútil. Só o que chama atenção e converte."
      />

      <div className="mt-6 grid gap-4 md:grid-cols-3 items-stretch [grid-auto-rows:1fr]">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.06}>
            <Card className="h-full flex flex-col border-muted/60">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-background"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--brand, 142 76% 45%)), hsl(var(--brand2, 196 86% 55%)))",
                    }}
                  >
                    {s.icon}
                  </div>
                  <Badge variant="secondary">{s.tag}</Badge>
                </div>

                <CardTitle className="mt-3 text-lg">
                  <span className="text-muted-foreground mr-2">{s.n}</span>
                  {s.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground">{s.desc}</p>

                <div className="mt-auto pt-6">
                  <Button asChild className="w-full" variant="secondary">
                    <Link href="/signup">
                      Começar <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */

function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
      <SectionHeader title="FAQ" subtitle="Só o que importa para decidir." />

      <div className="mt-6 grid gap-4 md:grid-cols-2 md:items-start items-stretch [grid-auto-rows:1fr]">
        <Reveal>
          <Card className="h-full border-muted/60">
            <CardHeader>
              <CardTitle className="text-lg">Perguntas rápidas</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                Respostas curtas pra não quebrar a conversão.
              </p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="a1">
                  <AccordionTrigger>É plano único?</AccordionTrigger>
                  <AccordionContent>Não. É mensal por criador.</AccordionContent>
                </AccordionItem>

                <AccordionItem value="a2">
                  <AccordionTrigger>Posso assinar vários?</AccordionTrigger>
                  <AccordionContent>Sim. Cada assinatura é independente.</AccordionContent>
                </AccordionItem>

                <AccordionItem value="a3">
                  <AccordionTrigger>Cancelamento?</AccordionTrigger>
                  <AccordionContent>
                    Cancela quando quiser. O acesso segue até o fim do período atual.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="h-full flex flex-col border-muted/60">
            <CardHeader>
              <CardTitle className="text-lg">O que você vende</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                Uma assinatura por criador — simples de entender, fácil de comprar.
              </p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="space-y-3 text-sm text-muted-foreground">
                <Row icon={<Users className="h-4 w-4" />} text="Assinante escolhe quem apoiar" />
                <Row icon={<CreditCard className="h-4 w-4" />} text="Pagamento mensal por criador" />
                <Row icon={<Star className="h-4 w-4" />} text="Experiência premium e direta" />
                <Row icon={<ShieldCheck className="h-4 w-4" />} text="Privacidade e confiança" />
              </div>

              <div className="mt-auto pt-6 grid gap-2 sm:grid-cols-2">
                <Button asChild className="w-full">
                  <Link href="/signup">Criar minha página</Link>
                </Button>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/creators">Explorar</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function Row(props: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground">{props.icon}</span>
      <span>{props.text}</span>
    </div>
  );
}

/* -------------------------------- Final CTA -------------------------------- */

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 p-6 sm:p-10 md:p-12">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(900px circle at 20% 30%, hsl(var(--brand, 142 76% 45%) / 0.20), transparent 45%), radial-gradient(900px circle at 75% 25%, hsl(var(--brand2, 196 86% 55%) / 0.18), transparent 40%), linear-gradient(180deg, hsl(var(--muted) / 0.35), hsl(var(--background)))",
            }}
          />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Venda acesso mensal com uma marca premium.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Defina seu preço. Publique. Cresça com recorrência.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Mensal por criador</Badge>
                <Badge variant="secondary">Vitrine premium</Badge>
                <Badge variant="secondary">Privacidade</Badge>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild size="lg">
                <Link href="/signup">
                  Criar minha página <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/creators">
                  Explorar criadores <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Monetix. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link className="text-muted-foreground hover:text-foreground" href="/privacy">
            Privacy
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="/terms">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------- Helpers ------------------------------- */

function SectionHeader(props: {
  title: string;
  subtitle: string;
  cta?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {props.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          {props.subtitle}
        </p>
      </div>

      {props.cta ? (
        <Button asChild variant="secondary" className="w-fit">
          <Link href={props.cta.href}>
            {props.cta.label} <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      ) : null}
    </div>
  );
}

function MiniPill(props: { icon: React.ReactNode; text: string }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-border/60 bg-background/60 p-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          {props.icon}
          <span>{props.text}</span>
        </div>
      </div>
    </Reveal>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-12% 0px -12% 0px", once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
