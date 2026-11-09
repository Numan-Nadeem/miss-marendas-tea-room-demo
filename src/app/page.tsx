"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PHONE_DISPLAY = "(931) 836-2542";
const PHONE_HREF = "tel:+19318362542";
const ADDRESS = "5 East Maple Street, Sparta, TN 38583";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Miss+Marenda%27s+Tea+Room+Sparta+TN";
const FACEBOOK_URL = "https://www.facebook.com/missmarenda/";

const MARQUEE_ITEMS = [
  "Chicken Salad",
  "Homemade Soup",
  "Fresh-Baked Sweets",
  "Loose-Leaf Tea",
  "Antiques & Gifts",
  "Slow Lunches",
];

const MENU = [
  {
    name: "The Tea Room Medley",
    desc: "Chicken salad, glazed fruit, and banana nut bread with cream cheese.",
  },
  {
    name: "Pineapple Boat",
    desc: "Chicken salad served in a hollowed pineapple half.",
  },
  {
    name: "Chicken Salad Sandwich",
    desc: "On homemade bread, with a cup of homemade soup.",
  },
  {
    name: "Grilled Pimento Sandwich",
    desc: "A house favorite, served with chips and a side salad.",
  },
  {
    name: "Egg Salad & Potato Soup",
    desc: "Old-fashioned, made from scratch, the way regulars remember.",
  },
  {
    name: "Roasted Beef Plate",
    desc: "A hearty, home-cooked plate for bigger appetites.",
  },
  {
    name: "Apple Dumplings",
    desc: "Warm from the oven and generous — save room.",
  },
  {
    name: "Coconut Caramel Pie",
    desc: "For anyone with a serious sweet tooth.",
  },
  {
    name: "Cupcakes, Tea Cakes & Cookies",
    desc: "Baked in-house, sold until they run out.",
  },
  {
    name: "A Pot of Tea & Coffee",
    desc: "Loose-leaf teas by the pot, poured slowly.",
  },
];

export default function Page() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".hero-el", {
      y: 26,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      immediateRender: false,
    });
    gsap.from(".hero-img", {
      scale: 1.05,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      immediateRender: false,
    });
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.from(el, {
        y: 28,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    });
  }, []);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf7f0] text-[#3b2f2b]">
      {/* ---------- Header ---------- */}
      <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 pt-6 sm:px-8">
        <a href="#top" className="min-w-0 leading-none">
          <span className="font-display block truncate text-[1.55rem] italic text-[#3b2f2b] sm:text-3xl">
            Miss Marenda&rsquo;s
          </span>
          <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#a8823f]">
            Tea Room &amp; Upstairs Treasures
          </span>
        </a>
        <a
          href={PHONE_HREF}
          className="shrink-0 rounded-full border border-[#a8823f] px-4 py-2 text-[0.8rem] font-semibold tracking-wide text-[#3b2f2b] transition-colors hover:bg-[#a8823f] hover:text-white sm:px-5 sm:text-sm"
        >
          Call {PHONE_DISPLAY}
        </a>
      </header>

      {/* ---------- Hero ---------- */}
      <main id="top">
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pt-14">
          <div className="lg:col-span-6">
            <p className="hero-el eyebrow">On Sparta&rsquo;s Historic Town Square</p>
            <h1 className="hero-el font-display mt-4 text-[2.6rem] leading-[1.06] font-medium text-[#3b2f2b] sm:text-6xl lg:text-[4.1rem]">
              Slow lunch, warm tea,{" "}
              <em className="text-[#9c554f]">and a little treasure hunting.</em>
            </h1>
            <p className="hero-el mt-5 max-w-xl text-base leading-relaxed text-[#6b5b54] sm:text-lg">
              Homemade chicken salad, soup, and sweets served Tuesday through
              Friday on East Maple Street — with antiques and gifts waiting
              upstairs and down.
            </p>
            <div className="hero-el mt-7 flex flex-wrap items-center gap-3">
              <a
                href={PHONE_HREF}
                className="rounded-full bg-[#3b2f2b] px-6 py-3 text-sm font-semibold text-[#fbf7f0] transition-colors hover:bg-[#9c554f]"
              >
                Call to Reserve a Table
              </a>
              <a
                href="#menu"
                className="rounded-full border border-[#3b2f2b]/30 px-6 py-3 text-sm font-semibold text-[#3b2f2b] transition-colors hover:border-[#a8823f] hover:text-[#a8823f]"
              >
                See the Menu
              </a>
            </div>
            <dl className="hero-el mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#a8823f]">
                  Lunch
                </dt>
                <dd className="mt-1 font-medium">Tue – Fri · 11 AM – 2 PM</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#a8823f]">
                  Gift Shop
                </dt>
                <dd className="mt-1 font-medium">Tue – Fri · 10 AM – 3 PM</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#a8823f]">
                  Find Us
                </dt>
                <dd className="mt-1 font-medium">5 E Maple St, Sparta</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6">
            <figure className="hero-img img-zoom gold-frame arch mx-auto max-w-[520px] overflow-hidden bg-[#f4e6e0]">
              <img
                src="/img/hero-storefront.webp"
                alt="The pink storefront of Miss Marenda's Tea Room on Sparta's town square, with its green door and a bicycle out front"
                width={1200}
                height={675}
                className="block h-auto w-full object-cover"
              />
            </figure>
            <p className="mt-5 text-center text-xs tracking-wide text-[#6b5b54]">
              The tea room door, on the square — look for the pink bicycle.
            </p>
          </div>
        </section>

        {/* ---------- Marquee ---------- */}
        <div
          aria-hidden="true"
          className="overflow-hidden border-y border-[#a8823f]/30 bg-[#f4e6e0] py-3"
        >
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <span key={copy} className="flex shrink-0 items-center">
                {MARQUEE_ITEMS.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="font-display flex items-center text-lg italic whitespace-nowrap text-[#3b2f2b]"
                  >
                    <span className="px-5">{item}</span>
                    <span className="text-[#a8823f]">❦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- The Tea Room ---------- */}
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <figure className="reveal img-zoom arch-sm gold-frame order-2 overflow-hidden bg-[#f4e6e0] lg:order-1">
            <img
              src="/img/interior-tea-table.webp"
              alt="A table inside Miss Marenda's Tea Room set with floral cloths and china teacups"
              width={1000}
              height={750}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </figure>
          <div className="reveal order-1 lg:order-2">
            <p className="eyebrow">The Tea Room</p>
            <h2 className="font-display mt-3 text-4xl leading-tight font-medium sm:text-5xl">
              Lunch, <em className="text-[#9c554f]">the unhurried way.</em>
            </h2>
            <p className="mt-5 leading-relaxed text-[#6b5b54]">
              Floral cloths, mismatched chairs, and china cups — the room feels
              less like a restaurant and more like lunch at a beloved
              aunt&rsquo;s house. Everything is homemade, the pace is slow on
              purpose, and regulars already know what they&rsquo;re ordering
              before they sit down.
            </p>
            <p className="mt-4 leading-relaxed text-[#6b5b54]">
              Come for the chicken salad. Stay for a second cup of tea and a
              wander through the shop.
            </p>
            <ul className="mt-7 space-y-3 text-[0.95rem]">
              {[
                "Homemade bread, soups, and dressings",
                "Tea poured by the pot, coffee always on",
                "Tables fill fast — calling ahead is wise",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#a8823f]">❦</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="scallop" aria-hidden="true" />
        </div>

        {/* ---------- Menu ---------- */}
        <section id="menu" className="mx-auto w-full max-w-6xl scroll-mt-8 px-5 py-16 sm:px-8 lg:py-24">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow">From the Kitchen</p>
            <h2 className="font-display mt-3 text-4xl font-medium sm:text-5xl">
              What&rsquo;s on the table
            </h2>
            <p className="mt-4 leading-relaxed text-[#6b5b54]">
              A short menu, done carefully — the kind of cooking that tastes
              like someone&rsquo;s grandmother is still in charge of it.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <figure className="reveal img-zoom arch-sm gold-frame self-start overflow-hidden bg-[#f4e6e0] lg:col-span-5">
              <img
                src="/img/lunch-plate.webp"
                alt="A lunch plate at Miss Marenda's: soup in a china cup, a chicken salad sandwich, chips and pickles"
                width={1000}
                height={869}
                loading="lazy"
                className="block h-auto w-full object-cover"
              />
              <figcaption className="bg-[#fbf7f0] px-5 py-4 text-center text-sm text-[#6b5b54]">
                Soup, a chicken salad sandwich, and pickles — the regulars&rsquo;
                order.
              </figcaption>
            </figure>
            <div className="reveal lg:col-span-7">
              <ul className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                {MENU.map((dish) => (
                  <li key={dish.name} className="min-w-0">
                    <div className="leader">
                      <h3 className="font-display text-lg leading-snug font-semibold">
                        {dish.name}
                      </h3>
                      <span className="dots" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#6b5b54]">
                      {dish.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-[#a8823f]/30 pt-5 text-sm leading-relaxed text-[#6b5b54]">
                Lunch is easy on the wallet — most guests spend about $10–$20
                a person. Menus and specials change with the season; call or
                check the tea room&rsquo;s Facebook page for what&rsquo;s on
                today.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Upstairs Treasures ---------- */}
        <section className="bg-[#f6efe4]">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
            <div className="reveal">
              <p className="eyebrow">Upstairs Treasures</p>
              <h2 className="font-display mt-3 text-4xl leading-tight font-medium sm:text-5xl">
                Lunch downstairs.{" "}
                <em className="text-[#9c554f]">Treasure hunting upstairs.</em>
              </h2>
              <p className="mt-5 leading-relaxed text-[#6b5b54]">
                The same building holds an antiques and gift shop spread across
                the main floor and the level above — amber glassware, decorative
                pottery, home décor, jewelry, and seasonal finds that change
                with every visit.
              </p>
              <p className="mt-4 leading-relaxed text-[#6b5b54]">
                Browse before your meal or after it. A quick lunch has a way of
                turning into a proper outing here.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {["Antiques", "Home Décor", "Amber Glassware", "Seasonal Gifts"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#a8823f]/50 bg-[#fbf7f0] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#3b2f2b]"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
            <figure className="reveal img-zoom arch-sm gold-frame overflow-hidden bg-[#f4e6e0]">
              <img
                src="/img/dining-room.webp"
                alt="The dining room at Miss Marenda's, a long table set with floral cloths beneath antique mirrors"
                width={1200}
                height={900}
                loading="lazy"
                className="block h-auto w-full object-cover"
              />
            </figure>
          </div>
        </section>

        {/* ---------- Gallery strip ---------- */}
        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <figure className="reveal img-zoom gold-frame overflow-hidden bg-[#f4e6e0]">
            <img
              src="/img/square-collage.webp"
              alt="Around Miss Marenda's: the shop door, a set table, a lunch plate, and the Sparta town square"
              width={900}
              height={675}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
            <figcaption className="bg-[#fbf7f0] px-5 py-4 text-center text-sm text-[#6b5b54]">
              The shop, the table, the plate — and the square outside the door.
            </figcaption>
          </figure>
        </section>

        {/* ---------- Visit ---------- */}
        <section id="visit" className="mx-auto w-full max-w-6xl scroll-mt-8 px-5 pb-20 sm:px-8">
          <div className="reveal overflow-hidden rounded-3xl border border-[#a8823f]/30 bg-[#3b2f2b] text-[#fbf7f0]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <figure className="img-zoom min-h-[280px] overflow-hidden">
                <img
                  src="/img/facade.webp"
                  alt="The full facade of Miss Marenda's Tea Room, a pink historic building on Sparta's square"
                  width={760}
                  height={950}
                  loading="lazy"
                  className="block h-full w-full object-cover"
                />
              </figure>
              <div className="px-7 py-10 sm:px-10 lg:py-12">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#c2a05e]">
                  Visit Us
                </p>
                <h2 className="font-display mt-3 text-4xl font-medium">
                  Your table is waiting.
                </h2>
                <p className="mt-4 leading-relaxed text-[#fbf7f0]/75">
                  On the historic square in Sparta — an easy stop on the way to
                  Rock Island State Park, and worth the drive on its own.
                </p>
                <dl className="mt-7 space-y-4 text-[0.95rem]">
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c2a05e]">
                      Address
                    </dt>
                    <dd>
                      <a href={MAPS_URL} className="underline decoration-[#c2a05e]/60 underline-offset-4 hover:text-white">
                        {ADDRESS}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c2a05e]">
                      Lunch
                    </dt>
                    <dd>Tuesday – Friday · 11:00 AM – 2:00 PM</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c2a05e]">
                      Gift Shop
                    </dt>
                    <dd>Tuesday – Friday · 10:00 AM – 3:00 PM</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c2a05e]">
                      Phone
                    </dt>
                    <dd>
                      <a href={PHONE_HREF} className="underline decoration-[#c2a05e]/60 underline-offset-4 hover:text-white">
                        {PHONE_DISPLAY}
                      </a>{" "}
                      · Saturday hours vary, call ahead
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c2a05e]">
                      Parking
                    </dt>
                    <dd>Free parking in the lot and on the street</dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={PHONE_HREF}
                    className="rounded-full bg-[#fbf7f0] px-6 py-3 text-sm font-semibold text-[#3b2f2b] transition-colors hover:bg-[#c2a05e] hover:text-white"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    className="rounded-full border border-[#fbf7f0]/40 px-6 py-3 text-sm font-semibold text-[#fbf7f0] transition-colors hover:border-[#c2a05e] hover:text-[#c2a05e]"
                  >
                    Facebook Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-[#a8823f]/30">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-[#6b5b54] sm:flex-row sm:items-center sm:px-8">
          <p>
            <span className="font-display text-lg italic text-[#3b2f2b]">
              Miss Marenda&rsquo;s
            </span>{" "}
            · Tea Room &amp; Upstairs Treasures · Sparta, TN
          </p>
          <a href={PHONE_HREF} className="font-semibold text-[#3b2f2b] hover:text-[#9c554f]">
            {PHONE_DISPLAY}
          </a>
        </div>
        <div className="mx-auto w-full max-w-6xl px-5 pb-8 sm:px-8">
          <p className="text-xs leading-relaxed text-[#6b5b54]/80">
            Website concept prepared for Miss Marenda&rsquo;s Tea Room ·
            numannadeem.dev — a design preview, not the business&rsquo;s
            official site. Photographs are the tea room&rsquo;s own listing and
            guest photos, via Google, Restaurantji, Wanderlog, and Unearth the
            Voyage.
          </p>
        </div>
      </footer>
    </div>
  );
}
