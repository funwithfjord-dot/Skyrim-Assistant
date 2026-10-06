(() => {
  "use strict";

  const wikiBase = "https://en.uesp.net/wiki/Skyrim:";

  /*
   * Shared wiki dictionary.
   *
   * Format:
   * {
   *   name: "Displayed name",
   *   page: "UESP_Page_Title",
   *   type: "ingredient",
   *   aliases: ["Alternative displayed name"]
   * }
   *
   * Page titles are explicit so exceptions can be corrected
   * without changing your HTML.
   */
  const entries = [
    // Ingredients
    { name: "Blue Mountain Flower", page: "Blue_Mountain_Flower", type: "ingredient" },
    { name: "Wheat", page: "Wheat", type: "ingredient" },
    { name: "Butterfly Wing", page: "Butterfly_Wing", type: "ingredient" },
    { name: "Blue Butterfly Wing", page: "Blue_Butterfly_Wing", type: "ingredient" },
    { name: "Garlic", page: "Garlic", type: "ingredient" },
    { name: "Juniper Berries", page: "Juniper_Berries", type: "ingredient" },
    { name: "Bee", page: "Bee", type: "ingredient" },
    { name: "Purple Mountain Flower", page: "Purple_Mountain_Flower", type: "ingredient" },
    { name: "Red Mountain Flower", page: "Red_Mountain_Flower", type: "ingredient" },
    { name: "Thistle Branch", page: "Thistle_Branch", type: "ingredient" },
    { name: "Mora Tapinella", page: "Mora_Tapinella", type: "ingredient" },
    { name: "Scaly Pholiota", page: "Scaly_Pholiota", type: "ingredient" },
    { name: "Salt Pile", page: "Salt_Pile", type: "ingredient" },
    { name: "Hawk Feathers", page: "Hawk_Feathers", type: "ingredient" },
    { name: "Vampire Dust", page: "Vampire_Dust", type: "ingredient" },
    { name: "Imp Gall", page: "Imp_Gall", type: "ingredient" },
    { name: "Scrib Jelly", page: "Scrib_Jelly", type: "ingredient" },
    { name: "Creep Cluster", page: "Creep_Cluster", type: "ingredient" },
    { name: "Hawk Beak", page: "Hawk_Beak", type: "ingredient" },
    { name: "Giant's Toe", page: "Giant%27s_Toe", type: "ingredient", aliases: ["Giant’s Toe"] },
    { name: "Charred Skeever Hide", page: "Charred_Skeever_Hide", type: "ingredient" },
    { name: "Felsaad Tern Feathers", page: "Felsaad_Tern_Feathers", type: "ingredient" },
    { name: "Mudcrab Chitin", page: "Mudcrab_Chitin", type: "ingredient" },
    { name: "Wisp Wrappings", page: "Wisp_Wrappings", type: "ingredient" },
    { name: "Salmon Roe", page: "Salmon_Roe", type: "ingredient" },
    { name: "Jazbay Grapes", page: "Jazbay_Grapes", type: "ingredient" },
    { name: "Nordic Barnacle", page: "Nordic_Barnacle", type: "ingredient" },
    { name: "Histcarp", page: "Histcarp", type: "ingredient" },
    { name: "Nirnroot", page: "Nirnroot", type: "ingredient" },
    { name: "Luna Moth Wing", page: "Luna_Moth_Wing", type: "ingredient" },
    { name: "Snowberries", page: "Snowberries", type: "ingredient" },
    { name: "Dragon's Tongue", page: "Dragon%27s_Tongue", type: "ingredient", aliases: ["Dragon’s Tongue"] },
    { name: "Swamp Fungal Pod", page: "Swamp_Fungal_Pod", type: "ingredient" },
    { name: "Tundra Cotton", page: "Tundra_Cotton", type: "ingredient" },
    { name: "Void Salts", page: "Void_Salts", type: "ingredient" },
    { name: "Bleeding Crown", page: "Bleeding_Crown", type: "ingredient" },
    { name: "Bear Claws", page: "Bear_Claws", type: "ingredient" },
    { name: "Canis Root", page: "Canis_Root", type: "ingredient" },
    { name: "Fly Amanita", page: "Fly_Amanita", type: "ingredient" },
    { name: "Elves Ear", page: "Elves_Ear", type: "ingredient" },
    { name: "Abecean Longfin", page: "Abecean_Longfin", type: "ingredient" },
    { name: "Frost Mirriam", page: "Frost_Mirriam", type: "ingredient" },
    { name: "Falmer Ear", page: "Falmer_Ear", type: "ingredient" },
    {name: "Namira's Rot", page: "Namira%27s_Rot", type: "ingredient", aliases: ["Namira’s Rot"] },
    { name: "Imp Stool", page: "Imp_Stool", type: "ingredient" },
    { name: "Deathbell", page: "Deathbell", type: "ingredient" },
    { name: "Skeever Tail", page: "Skeever_Tail", type: "ingredient" },
    { name: "Chokeberry", page: "Chokeberry", type: "ingredient" },
    { name: "Hagraven Feathers", page: "Hagraven_Feathers", type: "ingredient" },
    { name: "Troll Fat", page: "Troll_Fat", type: "ingredient" },
    { name: "Dreugh Wax", page: "Dreugh_Wax", type: "ingredient" },
    { name: "Gold Kanet", page: "Gold_Kanet", type: "ingredient" },
    { name: "Stoneflower Petals", page: "Stoneflower_Petals", type: "ingredient" },
    { name: "Blisterwort", page: "Blisterwort", type: "ingredient" },
    { name: "Glowing Mushroom", page: "Glowing_Mushroom", type: "ingredient" },
    { name: "Blue Dartwing", page: "Blue_Dartwing", type: "ingredient" },
    { name: "Orange Dartwing", page: "Orange_Dartwing", type: "ingredient" },
    { name: "Fire Salts", page: "Fire_Salts", type: "ingredient" },
    { name: "Bittergreen Petals", page: "Bittergreen_Petals", type: "ingredient" },
    { name: "Blister Pod Cap", page: "Blister_Pod_Cap", type: "ingredient" },
    { name: "Void Essence", page: "Void_Essence", type: "ingredient" },
    { name: "Fungus Stalk", page: "Fungus_Stalk", type: "ingredient" },
    { name: "Ambrosia", page: "Ambrosia", type: "ingredient" },
    { name: "Dwarven Oil", page: "Dwarven_Oil", type: "ingredient" },
    { name: "River Betty", page: "River_Betty", type: "ingredient" },
    { name: "Spriggan Sap", page: "Spriggan_Sap", type: "ingredient" },
    { name: "Emperor Parasol Moss", page: "Emperor_Parasol_Moss", type: "ingredient" },
    { name: "Angelfish", page: "Angelfish", type: "ingredient" },
    {name: "Rock Warbler Egg", page: "Rock_Warbler_Egg", type: "ingredient"},
    { name: "Eye of Sabre Cat", page: "Eye_of_Sabre_Cat", type: "ingredient" },
    { name: "Large Antlers", page: "Large_Antlers", type: "ingredient" },
    { name: "Netch Jelly", page: "Netch_Jelly", type: "ingredient" },
    { name: "Honeycomb", page: "Honeycomb", type: "ingredient" },
    { name: "Torchbug Thorax", page: "Torchbug_Thorax", type: "ingredient" },
    { name: "Ash Hopper Jelly", page: "Ash_Hopper_Jelly", type: "ingredient"
    },

    /*
     * Add other types here later:
     *
     * ,{
     *   name: "Displayed location name",
     *   page: "Exact_UESP_Page_Title",
     *   type: "location",
     *   aliases: []
     * }
     */
  ];

  const contentSelector = ".panel, .assistant-card, .quick-note";

  const excludedSelector = [
    "a",
    "button",
    "script",
    "style",
    "textarea",
    "input",
    "select",
    "code",
    "pre",
    "nav",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "[contenteditable]",
    "[data-no-wiki-links]"
  ].join(", ");

  const termLookup = new Map();

  entries.forEach((entry) => {
    [entry.name, ...(entry.aliases || [])].forEach((term) => {
      termLookup.set(term.toLowerCase(), entry);
    });
  });

  function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Longest names first prevents "Butterfly Wing" from taking
  // priority over "Blue Butterfly Wing".
  const terms = [...termLookup.keys()].sort(
    (a, b) => b.length - a.length
  );

  const matcher = new RegExp(
    terms.map(escapeRegex).join("|"),
    "gi"
  );

  function isWordCharacter(character) {
    return Boolean(character && /[\p{L}\p{N}_]/u.test(character));
  }

  function createLink(text, entry) {
    const link = document.createElement("a");

    link.href = wikiBase + entry.page;
    link.textContent = text;
    link.classList.add("wiki-link");

    if (entry.type) {
      link.classList.add(`wiki-link-${entry.type}`);
    }

    // Keeps compatibility with ingredient-specific styling.
    if (entry.type === "ingredient") {
      link.classList.add("ingredient-link");
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = `${entry.name} on UESP — opens in a new tab`;

    return link;
  }

  function processTextNode(node) {
    const text = node.nodeValue;
    const fragment = document.createDocumentFragment();

    let cursor = 0;
    let changed = false;

    matcher.lastIndex = 0;

    let match;

    while ((match = matcher.exec(text)) !== null) {
      const start = match.index;
      const end = start + match[0].length;

      // Do not link "Bee" inside "Beef", for example.
      if (
        isWordCharacter(text[start - 1]) ||
        isWordCharacter(text[end])
      ) {
        continue;
      }

      const entry = termLookup.get(match[0].toLowerCase());

      if (!entry) {
        continue;
      }

      fragment.appendChild(
        document.createTextNode(text.slice(cursor, start))
      );

      fragment.appendChild(createLink(match[0], entry));

      cursor = end;
      changed = true;
    }

    if (!changed) {
      return;
    }

    fragment.appendChild(
      document.createTextNode(text.slice(cursor))
    );

    node.replaceWith(fragment);
  }

  function refresh(root = document) {
    const containers = [];

    if (
      root instanceof Element &&
      root.matches(contentSelector)
    ) {
      containers.push(root);
    }

    containers.push(...root.querySelectorAll(contentSelector));

    // Collect nodes before editing the DOM.
    const textNodes = new Set();

    containers.forEach((container) => {
      const walker = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(node) {
            const parent = node.parentElement;

            if (
              !node.nodeValue.trim() ||
              !parent ||
              parent.closest(excludedSelector)
            ) {
              return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      while (walker.nextNode()) {
        textNodes.add(walker.currentNode);
      }
    });

    textNodes.forEach(processTextNode);
  }

  window.SkyrimWikiLinks = {
    refresh
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => refresh());
  } else {
    refresh();
  }
})();