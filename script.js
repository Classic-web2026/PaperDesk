const files = [
    "abstract-background-3840x2400-10298.jpg",
    "alfa-romeo-1284x2778-27511.jpg",
    "blue-aesthetic-5120x2880-17495.jpg",
    "bmw-f-450-rm-sport-1284x2778-27531.jpg",
    "delorean-back-to-1284x2778-27525.jpg",
    "dinosaur-pixel-art-1284x2778-27520.jpg",
    "dodge-charger-1284x2778-27543.jpg",
    "ford-mustang-dark-1284x2778-27483.jpg",
    "golden-abstract-1284x2778-27444.jpg",
    "golden-abstract-3840x3840-27444.jpg",
    "green-abstract-1284x2778-27443.jpg",
    "green-abstract-3840x3840-27443.jpg",
    "huawei-dark-mode-5800x3200-26686.jpg",
    "huawei-gradient-5800x3200-26687.jpg",
    "huawei-nova-16-5800x3200-26688.jpg",
    "iphone-18-pro-max-1320x2868-27267.jpg",
    "iphone-18-pro-max-1320x2868-27268.jpg",
    "iphone-18-pro-max-1320x2868-27269.jpg",
    "iphone-18-pro-max-1320x2868-27270.jpg",
    "iphone-18-pro-stock-1206x2622-27243.jpg",
    "iphone-18-pro-stock-1206x2622-27246.jpg",
    "iphone-18-pro-stock-1206x2622-27251.jpg",
    "iphone-18-pro-stock-1206x2622-27261.jpg",
    "kingdom-hearts-1284x2778-27569.jpg",
    "layers-windows-11-3840x2400-11770.jpg",
    "mitsuki-koga-aya-1284x2778-27616.jpg",
    "modern-blue-waves-5120x2880-24611.jpg",
    "mortal-shell-knight-1284x2778-27506.jpg",
    "motorola-razr-fold-3840x4267-26566.jpg",
    "narnia-the-1284x2778-27503.jpg",
    "opel-stx-concept-1284x2778-27576.jpg",
    "piranha-plant-super-1284x2778-27469.jpg",
    "purple-abstract-1284x2778-27445.jpg",
    "purple-abstract-3840x3840-27445.jpg",
    "purple-background-3840x2400-10300.jpg",
    "samsung-galaxy-tab-5120x3632-25729.jpg",
    "samsung-galaxy-tab-5120x3632-25734.jpg",
    "solar-system-3840x2400-10296.jpg",
    "solar-system-3840x2400-10297.jpg",
    "waves-windows-11-3840x2400-11760.jpg",
    "windows-11-8k-stock-8192x5120-17012.jpg",
    "windows-11-abstract-3840x2400-20792.jpg",
    "windows-11-black-3840x2400-11759.jpg",
    "windows-11-blue-8520x5680-20794.jpg",
    "windows-11-dark-3840x2400-11771.jpg",
    "windows-11-floating-3840x2400-20797.jpg",
    "windows-11-gradient-background-bloom-light-backgrounds-5k-5120x2880-8411.jpg",
    "windows-11-light-3840x2400-11762.jpg",
    "windows-11-teal-3840x2400-11768.jpg",
    "acer-predator-black-3840x2160-27275.png",
    "apple-logo-black-7680x4320-27322.png",
    "apple-logo-shining-5120x2880-27380.png",
    "avatar-aang-the-5120x2880-27087.jpg",
    "black-panther-5120x2880-27331.png",
    "bloom-windows-11-4500x3000-11486.jpg",
    "blue-abstract-1080x1920-24765.jpg",
    "blue-background-abstract-background-windows-11-1080x2160-8846.jpg",
    "blue-background-abstract-background-windows-11-2048x2048-8846.jpg",
    "blue-background-abstract-background-windows-11-3840x2160-8846.jpg",
    "brabus-urban-e-5120x3413-27537.jpg",
    "dark-red-abstract-5120x2880-27442.jpg",
    "doctor-doom-8k-7680x4320-27347.jpg",
    "dragon-ball-super-3840x2160-27491.jpg",
    "europa-jupiter-moon-5120x2880-26741.jpg",
    "ferrari-812-3840x2160-27553.jpg",
    "ferrari-purosangue-3840x2160-27555.jpg",
    "geometric-purple-2160x3840-24844.jpg",
    "geometric-purple-2560x2560-24844.jpg",
    "geometric-purple-5120x5120-24844.jpg",
    "ghost-pixel-art-7680x4320-27474.png",
    "green-abstract-1080x2160-27443.jpg",
    "green-abstract-3840x1080-27443.jpg",
    "gta-6-artwork-jason-3840x2160-26685.jpg",
    "huawei-dark-mode-5800x3200-26686.png",
    "judge-dredd-black-7680x4320-26911.png",
    "lah-kara-star-wars-7680x4320-26972.png",
    "landscape-layers-5120x3319-27382.png",
    "layers-3d-1440x2560-17326.jpg",
    "layers-3d-2560x2560-17326.jpg",
    "layers-3d-5120x2880-17326.jpg",
    "layers-windows-11-3840x2400-11770.png",
    "macos-27-golden-4480x3088-26625.png",
    "macos-27-golden-4480x3088-26626.png",
    "microsoft-surface-5120x2880-26735.jpg",
    "microsoft-surface-5120x2880-26737.jpg",
    "mike-tyson-fists-of-5120x2880-27366.jpg",
    "mortal-shell-knight-5120x2880-27506.jpg",
    "motorola-razr-fifa-1440x2560-25823.jpg",
    "motorola-razr-fifa-2560x2560-25823.jpg",
    "motorola-razr-fifa-5120x2880-25823.jpg",
    "purple-abstract-1125x2436-24770.jpg",
    "stac-a-phris-arch-1206x2622-26748.jpg",
    "stac-a-phris-arch-1440x2560-26748.jpg",
    "stac-a-phris-arch-2560x2560-26748.jpg",
    "stac-a-phris-arch-5120x3413-26748.jpg",
    "stac-a-phris-arch-720x1280-26748.jpg",
    "t-800-endoskeleton-6400x3632-26738.png",
    "valley-de-yosemite-yosemite-national-park-landmark-1440x2560-4072.jpg",
    "valley-de-yosemite-yosemite-national-park-landmark-2560x2560-4072.jpg",
    "valley-de-yosemite-yosemite-national-park-landmark-5120x3200-4072.jpg",
    "view-point-loch-katrine-scotland-sunset-landscape-dusk-5k-1440x2560-6399.jpg",
    "view-point-loch-katrine-scotland-sunset-landscape-dusk-5k-2560x2560-6399.jpg",
    "view-point-loch-katrine-scotland-sunset-landscape-dusk-5k-4849x2727-6399.jpg",
    "vortex-colorful-5120x3833-26984.jpg",
    "water-burst-mist-5120x2880-27430.jpg",
    "welcome-home-apple-3840x2160-27518.png",
    "xiaomi-18-fold-1440x2560-27263.jpg",
    "xiaomi-18-fold-2560x2560-27263.jpg",
    "xiaomi-18-fold-5120x2880-27263.jpg",
    "yosemite-national-park-sunrise-tunnel-view-beautiful-sky-2160x3840-7804.jpg",
    "yosemite-national-park-sunrise-tunnel-view-beautiful-sky-2560x2560-7804.jpg",
    "yosemite-national-park-sunrise-tunnel-view-beautiful-sky-7878x5760-7804.jpg",
    "yosemite-valley-mirror-lake-yosemite-national-park-1080x2400-6091.jpg",
    "yosemite-valley-mirror-lake-yosemite-national-park-2048x2048-6091.jpg",
    "yosemite-valley-mirror-lake-yosemite-national-park-3840x2160-6091.jpg"
];

const lightFiles = new Set([
    "abstract-background-3840x2400-10298.jpg",
    "huawei-gradient-5800x3200-26687.jpg",
    "huawei-nova-16-5800x3200-26688.jpg",
    "layers-windows-11-3840x2400-11770.jpg",
    "purple-background-3840x2400-10300.jpg",
    "solar-system-3840x2400-10297.jpg",
    "windows-11-8k-stock-8192x5120-17012.jpg",
    "windows-11-abstract-3840x2400-20792.jpg",
    "windows-11-blue-8520x5680-20794.jpg",
    "windows-11-floating-3840x2400-20797.jpg",
    "windows-11-gradient-background-bloom-light-backgrounds-5k-5120x2880-8411.jpg",
    "windows-11-light-3840x2400-11762.jpg"
]);

const darkFiles = new Set([
    "blue-aesthetic-5120x2880-17495.jpg",
    "golden-abstract-3840x3840-27444.jpg",
    "green-abstract-3840x3840-27443.jpg",
    "huawei-dark-mode-5800x3200-26686.jpg",
    "purple-abstract-3840x3840-27445.jpg",
    "solar-system-3840x2400-10296.jpg",
    "windows-11-black-3840x2400-11759.jpg",
    "windows-11-dark-3840x2400-11771.jpg",
    "windows-11-teal-3840x2400-11768.jpg"
]);

const pcAnimeFiles = new Set(files.filter(file =>
    /^(avatar-aang-the-|dragon-ball-super-)/.test(file)
));
const pcWindowsFiles = new Set(files.filter(file =>
    /^(windows-11-|layers-windows-11-|waves-windows-11-|blue-background-abstract-background-windows-11-|bloom-windows-11-)/.test(file)
    || file.startsWith("blue-aesthetic-")
));
const pcAbstractFiles = new Set(files.filter(file =>
    /^(abstract-background-|blue-abstract-|blue-background-abstract-|dark-red-abstract-|geometric-purple-|golden-abstract-3840|green-abstract-|huawei-|layers-3d-|landscape-layers-|modern-blue-waves-|purple-abstract-3840|purple-background-|vortex-colorful-|water-burst-mist-)/.test(file)
));
const pcSpaceFiles = new Set(files.filter(file =>
    /^(solar-system-|europa-jupiter-moon-)/.test(file)
));

const phoneCategoryFiles = {
    cars: new Set(files.filter(file => /^(alfa-romeo|delorean-back|dodge-charger|ford-mustang|opel-stx)/.test(file))),
    motorcycles: new Set(files.filter(file => file.startsWith("bmw-f-450"))),
    anime: new Set(["mitsuki-koga-aya-1284x2778-27616.jpg"]),
    iphone: new Set(files.filter(file => file.startsWith("iphone-18-"))),
    abstract: new Set(files.filter(file => /^(blue-abstract-|blue-background-abstract-|geometric-purple-|golden-abstract-1284|green-abstract-|layers-3d-|motorola-razr-fold|purple-abstract-1125|purple-abstract-1284)/.test(file))),
    games: new Set([
        "dinosaur-pixel-art-1284x2778-27520.jpg",
        "kingdom-hearts-1284x2778-27569.jpg",
        "motorola-razr-fifa-1440x2560-25823.jpg",
        "mortal-shell-knight-1284x2778-27506.jpg",
        "piranha-plant-super-1284x2778-27469.jpg"
    ]),
    space: new Set()
};

const pcFilters = [
    ["all", "Все"],
    ["light", "Светлые"],
    ["dark", "Тёмные"],
    ["anime", "Аниме"],
    ["windows", "Windows 11"],
    ["abstract", "Абстракт"],
    ["space", "Космос (Планеты)"]
];
const phoneFilters = [
    ["cars", "Машины"],
    ["motorcycles", "Мотоциклы"],
    ["anime", "Аниме"],
    ["iphone", "Apple iPhone 18"],
    ["abstract", "Абстракт"],
    ["games", "Игры"],
    ["space", "Космос"]
];
const downloadIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';

const grid = document.querySelector(".wallpaper-grid");
const emptyState = document.querySelector(".empty-state");
const subTabs = document.querySelector(".sub-tabs");
const categoryTabs = [...document.querySelectorAll(".category-tabs .tab-button")];
const downloadScreen = document.querySelector(".download-screen");
const header = document.querySelector(".header");
const headerStickyThreshold = header.offsetTop - 12;
let activeDevice = "pc";
let activeFilter = "all";
let hideTimer;

function updateHeaderOnScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > headerStickyThreshold);
}

window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

const cards = files.map((file, index) => {
    const dimensions = file.match(/(\d{3,5})x(\d{3,5})/);
    const width = dimensions ? Number(dimensions[1]) : 0;
    const height = dimensions ? Number(dimensions[2]) : 0;
    const isPortrait = height > width || file.startsWith("motorola-razr-fold");
    const isSquare = width === height && width > 0;
    const device = file.startsWith("samsung-galaxy-tab") || file.startsWith("narnia-the") || isSquare ? "other"
        : isPortrait ? "phone" : "pc";
    const card = document.createElement("article");
    card.className = "wallpaper-card";
    card.dataset.device = device;
    card.dataset.orientation = isPortrait || file.startsWith("motorola-razr-fold") ? "portrait" : "landscape";
    card.style.setProperty("--enter-delay", `${Math.min(index, 8) * 35}ms`);

    const image = document.createElement("img");
    image.src = `previews/${file}`;
    const imageName = file
        .replace(/\.[^.]+$/, "")
        .replace(/-\d{3,5}x\d{3,5}-\d+$/, "")
        .replace(/-/g, " ");
    image.alt = `Обои: ${imageName}`;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
        image.src = file;
    }, { once: true });

    const link = document.createElement("a");
    link.className = "image-open";
    link.href = file;
    link.download = "";
    link.setAttribute("aria-label", `Скачать ${file}`);
    link.innerHTML = downloadIcon;

    card.append(link, image);
    grid.append(card);
    return { card, device, file };
});

function renderSubTabs() {
    const filters = activeDevice === "pc" ? pcFilters : activeDevice === "phone" ? phoneFilters : [];
    subTabs.replaceChildren(...filters.map(([filter, label], index) => {
        const button = document.createElement("button");
        const active = activeDevice === "pc" ? index === 0 : false;
        button.className = `tab-button${active ? " is-active" : ""}`;
        button.textContent = label;
        button.dataset.filter = filter;
        button.setAttribute("aria-pressed", String(active));
        return button;
    }));
    activeFilter = "all";
}

function filterCards() {
    grid.dataset.device = activeDevice;
    let visibleCount = 0;
    cards.forEach(({ card, device, file }) => {
        const matchesDevice = device === activeDevice;
        const matchesFilter = activeFilter === "all"
            || (activeFilter === "light" && lightFiles.has(file))
            || (activeFilter === "dark" && darkFiles.has(file))
            || (activeFilter === "anime" && pcAnimeFiles.has(file))
            || (activeFilter === "windows" && pcWindowsFiles.has(file))
            || (activeFilter === "abstract" && (activeDevice === "pc" ? pcAbstractFiles : phoneCategoryFiles.abstract).has(file))
            || (activeFilter === "space" && (activeDevice === "pc" ? pcSpaceFiles : phoneCategoryFiles.space).has(file))
            || (activeDevice === "phone" && phoneCategoryFiles[activeFilter]?.has(file));
        card.hidden = !(matchesDevice && matchesFilter);
        if (!card.hidden) visibleCount++;
    });
    emptyState.hidden = visibleCount > 0;
}

categoryTabs.forEach(button => button.addEventListener("click", () => {
    activeDevice = button.dataset.device;
    categoryTabs.forEach(tab => {
        const active = tab === button;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-pressed", String(active));
    });
    renderSubTabs();
    filterCards();
}));

subTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    subTabs.querySelectorAll(".tab-button").forEach(tab => {
        const active = tab === button;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-pressed", String(active));
    });
    filterCards();
});

function showDownloadProgress() {
    clearTimeout(hideTimer);
    downloadScreen.classList.remove("is-active");
    void downloadScreen.offsetWidth;
    downloadScreen.classList.add("is-active");
    downloadScreen.setAttribute("aria-hidden", "false");
    hideTimer = setTimeout(() => {
        downloadScreen.classList.remove("is-active");
        downloadScreen.setAttribute("aria-hidden", "true");
    }, 5000);
}

function createPixelBurst(image) {
    if (!image.complete || !image.naturalWidth) {
        image.classList.add("is-disintegrating");
        setTimeout(() => image.classList.remove("is-disintegrating"), 900);
        return;
    }

    const bounds = image.getBoundingClientRect();
    const columns = 18;
    const rows = Math.max(1, Math.round(columns * bounds.height / bounds.width));
    const canvas = document.createElement("canvas");
    canvas.width = columns;
    canvas.height = rows;
    const context = canvas.getContext("2d");
    if (!context) {
        image.classList.add("is-disintegrating");
        setTimeout(() => image.classList.remove("is-disintegrating"), 900);
        return;
    }

    const scale = Math.max(columns / image.naturalWidth, rows / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    context.drawImage(image, (columns - width) / 2, (rows - height) / 2, width, height);
    const pixels = context.getImageData(0, 0, columns, rows).data;
    const burst = document.createElement("div");
    burst.className = "pixel-burst";
    const cellWidth = bounds.width / columns;
    const cellHeight = bounds.height / rows;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            const offset = (y * columns + x) * 4;
            if (pixels[offset + 3] < 24) continue;
            const pixel = document.createElement("span");
            pixel.className = "download-pixel";
            pixel.style.left = `${bounds.left + x * cellWidth}px`;
            pixel.style.top = `${bounds.top + y * cellHeight}px`;
            pixel.style.width = `${cellWidth + 1}px`;
            pixel.style.height = `${cellHeight + 1}px`;
            pixel.style.backgroundColor = `rgba(${pixels[offset]},${pixels[offset + 1]},${pixels[offset + 2]},${pixels[offset + 3] / 255})`;
            pixel.style.setProperty("--fly-x", `${Math.round((Math.random() - .5) * 150)}px`);
            pixel.style.setProperty("--fly-y", `${-Math.round(Math.max(80, bounds.top + y * cellHeight + 80 + Math.random() * 100))}px`);
            pixel.style.setProperty("--fly-rotate", `${Math.round((Math.random() - .5) * 220)}deg`);
            pixel.style.setProperty("--pixel-delay", `${Math.round(Math.random() * 160)}ms`);
            burst.append(pixel);
        }
    }

    document.body.append(burst);
    image.classList.add("is-disintegrating");
    setTimeout(() => burst.remove(), 1000);
    setTimeout(() => image.classList.remove("is-disintegrating"), 900);
}

document.addEventListener("click", event => {
    const link = event.target.closest(".image-open");
    if (!link) return;
    const image = link.parentElement.querySelector("img");
    if (image) createPixelBurst(image);
    setTimeout(showDownloadProgress, 700);
});

renderSubTabs();
filterCards();
