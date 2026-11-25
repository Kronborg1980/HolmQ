/* Standardindhold. Bruges indtil Firebase er sat op – og som udgangspunkt
   for det, der kan redigeres i admin. */
window.HOLMQ_DEFAULTS = {
  content: {
    company: "HolmQ Service ApS",
    ownerName: "Emil",
    tagline: "Haveservice • Vedligeholdelse • Små reparationer",
    heroTitle: "Haveservice og vedligeholdelse i Hirtshals og omegn",
    heroText: "Fra den faste græsslåning til stubfræsning og ny græsplæne. Jeg tager mig af haven og de små opgaver omkring huset, så du kan bruge tiden på noget andet.",
    phone: "60804373",
    email: "",
    cvr: "46667948",
    city: "Hirtshals",
    zip: "9850",
    facebook: "https://www.facebook.com/share/1MdyLCZvjz/",
    hours: "Ring når det passer dig – jeg svarer så hurtigt jeg kan",
    areaText: "Jeg kører primært i Hirtshals og omegn. Bor du lidt længere væk, så ring og hør – der er tit en løsning.",
    areas: ["Hirtshals", "Hjørring", "Tornby", "Tversted", "Horne", "Bindslev"],
    aboutTitle: "Lokal havehjælp med styr på detaljerne",
    aboutText: "HolmQ Service ApS er en lokal virksomhed fra Hirtshals. Jeg hjælper private og erhverv med haven og huset – fra den ugentlige græsslåning og hækklipning til større opgaver som stubfræsning, jordfræsning og anlæg af ny græsplæne.\n\nJeg har mit eget professionelle udstyr med, og jeg rydder op efter mig. Ingen opgave er for lille – ring og få et uforpligtende tilbud.",
    promise: "Kvalitet og pålidelighed – hver gang",
    formEmail: "",
    services: [
      { icon: "mower",  title: "Græsslåning",            text: "Fast eller enkeltvis græsslåning med professionelt udstyr – også større arealer med havetraktor." },
      { icon: "hedge",  title: "Hækklipning",            text: "Lige linjer og pæne hække. Jeg klipper, former og rydder op bagefter." },
      { icon: "tree",   title: "Beskæring",              text: "Beskæring af buske, kugletræer og frugttræer, så de holder formen og trives." },
      { icon: "leaf",   title: "Havepleje",              text: "Lugning, oprydning og den løbende pleje, der holder haven flot hele sæsonen." },
      { icon: "stump",  title: "Stubfræsning",           text: "Træstub i vejen? Jeg fræser den væk, så du kan så græs eller plante nyt.", badge: "Nyhed" },
      { icon: "soil",   title: "Jordfræsning & ny græsplæne", text: "Jordfræsning med traktor og klargøring af jorden til en helt ny græsplæne." },
      { icon: "weed",   title: "Ukrudt & belægninger",   text: "Fjernelse af ukrudt langs hegn, fortov og fliser – evt. med nyt dække af sten." },
      { icon: "wrench", title: "Små reparationer",       text: "De små opgaver omkring huset, som aldrig rigtig bliver gjort." }
    ],
    faq: [
      { q: "Koster det noget at få et tilbud?", a: "Nej. Du får et uforpligtende tilbud – ring, skriv eller udfyld formularen, så vender jeg tilbage." },
      { q: "Kan jeg få fast hjælp til haven?", a: "Ja. Græsslåning og hækklipning kan sagtens aftales som en fast ordning – fx hver uge eller hver 14. dag i sæsonen." },
      { q: "Hjælper du også erhverv og foreninger?", a: "Ja, både private, boligforeninger og virksomheder er velkomne. Fortæl om opgaven, så finder vi en løsning." },
      { q: "Hvad hvis opgaven ikke står på listen?", a: "Spørg endelig. Står der ikke lige det, du har brug for, kan jeg tit hjælpe alligevel." }
    ],
    reviews: []
  },

  projects: [
    { id: "d-hegn", title: "Farvel til ukrudtet – goddag til sten", category: "Ukrudt & belægninger", location: "Hirtshals", date: "2026",
      description: "Ukrudtet langs hegnet og fortovet blev fjernet, og bedet fik et nyt, vedligeholdelsesfrit dække af sten.",
      photos: [{ src: "assets/img/hegn-foer.jpg", tag: "before" }, { src: "assets/img/hegn-efter.jpg", tag: "after" }] },
    { id: "d-plaene", title: "Ny græsplæne", category: "Jordfræsning & ny græsplæne", location: "Hirtshals", date: "2026",
      description: "Den gamle, ujævne plæne blev fræset op med traktor, og jorden blev rettet af og gjort klar til en helt ny græsplæne.",
      photos: [{ src: "assets/img/graesplaene-foer.jpg", tag: "before" }, { src: "assets/img/graesplaene-efter.jpg", tag: "after" }, { src: "assets/img/graesplaene-klar.jpg" }, { src: "assets/img/jordfraesning.jpg" }] },
    { id: "d-stub", title: "Stubfræsning langs skur", category: "Stubfræsning", location: "", date: "2026",
      description: "Træerne var fældet, men stubbene stod tilbage. Nu er de fræset væk, så området kan bruges igen.",
      photos: [{ src: "assets/img/stubfraesning.jpg" }] },
    { id: "d-kugle", title: "En hyggedag på jobbet", category: "Beskæring", location: "", date: "2026",
      description: "Klipning af kugletræer og hæk samt oprydning af fliser og bede.",
      photos: [{ src: "assets/img/kugletrae-1.jpg" }, { src: "assets/img/kugletrae-2.jpg" }, { src: "assets/img/kugletrae-3.jpg" }, { src: "assets/img/kugletrae-4.jpg" }] },
    { id: "d-haek", title: "Hækklipning ved indkørsel", category: "Hækklipning", location: "", date: "2026",
      description: "Hækken fik en skarp, lige form, så indkørslen igen ser indbydende ud.",
      photos: [{ src: "assets/img/haekklipning.jpg" }] },
    { id: "d-graes", title: "Græsslåning", category: "Græsslåning", location: "", date: "2026",
      description: "Store og små plæner – med havetraktor eller professionel plæneklipper.",
      photos: [{ src: "assets/img/plaeneklipning.jpg" }, { src: "assets/img/graesslaaning.jpg" }] },
    { id: "d-tilgroet", title: "Tilgroet have får nyt liv", category: "Havepleje", location: "", date: "2026",
      description: "Buske og bede var vokset helt til. Her er udgangspunktet, inden oprydningen gik i gang.",
      photos: [{ src: "assets/img/foer-collage.jpg", tag: "before" }] }
  ]
};
