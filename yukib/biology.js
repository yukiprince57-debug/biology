// Geological time data
const geoTime = {
    Paleozoic: {
        "Cambrian": { epochs: ["Early Cambrian", "Middle Cambrian", "Late Cambrian"], years: "541–485 Ma", mammals: "-", plants: "Marine algae, early plants" },
        "Ordovician": { epochs: ["Early Ordovician", "Late Ordovician"], years: "485–443 Ma", mammals: "-", plants: "Marine plants, first land plants" },
        "Silurian": { epochs: ["Llandovery", "Wenlock", "Ludlow", "Pridoli"], years: "443–419 Ma", mammals: "-", plants: "Vascular plants, first forests" },
        "Devonian": { epochs: ["Early", "Middle", "Late"], years: "419–359 Ma", mammals: "-", plants: "First seed plants, forests" },
        "Carboniferous": { epochs: ["Mississippian", "Pennsylvanian"], years: "359–299 Ma", mammals: "-", plants: "Coal forests, giant ferns" },
        "Permian": { epochs: ["Cisuralian", "Guadalupian", "Lopingian"], years: "299–252 Ma", mammals: "-", plants: "Gymnosperms dominate" }
    },
    Mesozoic: {
        "Triassic": { epochs: ["Early", "Middle", "Late"], years: "252–201 Ma", mammals: "Early mammals", plants: "Gymnosperms, ferns" },
        "Jurassic": { epochs: ["Early", "Middle", "Late"], years: "201–145 Ma", mammals: "Small mammals", plants: "Conifers, cycads" },
        "Cretaceous": { epochs: ["Early", "Late"], years: "145–66 Ma", mammals: "Early placentals", plants: "Flowering plants spread" }
    },
    Cenozoic: {
        "Paleogene": { epochs: ["Paleocene", "Eocene", "Oligocene"], years: "66–23 Ma", mammals: "Diversifying mammals", plants: "Forests expand" },
        "Neogene": { epochs: ["Miocene", "Pliocene"], years: "23–2.6 Ma", mammals: "Grazing mammals, early apes", plants: "Grasses dominate" },
        "Quaternary": { epochs: ["Pleistocene", "Holocene"], years: "2.6 Ma–present", mammals: "Humans, Ice age mammals", plants: "Modern vegetation" }
    }
};

// Populate periods when an era is selected
function showPeriods() {
    const era = document.getElementById("eraSelect").value;
    const periodSelect = document.getElementById("periodSelect");
    periodSelect.innerHTML = '<option value="">--Select Period--</option>';
    document.getElementById("epochSelect").innerHTML = '<option value="">--Select Epoch--</option>';
    if (!era) return;
    Object.keys(geoTime[era]).forEach(p => {
        let opt = document.createElement("option");
        opt.value = p;
        opt.text = p;
        periodSelect.add(opt);
    });
    document.getElementById("conclusion").innerHTML = "Select a period...";
}

// Populate epochs when a period is selected
function showEpochs() {
    const era = document.getElementById("eraSelect").value;
    const period = document.getElementById("periodSelect").value;
    const epochSelect = document.getElementById("epochSelect");
    epochSelect.innerHTML = '<option value="">--Select Epoch--</option>';
    if (!era || !period) return;
    geoTime[era][period].epochs.forEach(e => {
        let opt = document.createElement("option");
        opt.value = e;
        opt.text = e;
        epochSelect.add(opt);
    });
    document.getElementById("conclusion").innerHTML = "Select an epoch...";
}

// Update conclusion when an epoch is selected
function updateConclusion() {
    const era = document.getElementById("eraSelect").value;
    const period = document.getElementById("periodSelect").value;
    const epoch = document.getElementById("epochSelect").value;
    if (!era || !period || !epoch) return;

    const epochData = geoTime[era][period];
    const conclusionDiv = document.getElementById("conclusion");
    conclusionDiv.innerHTML = `
        <strong>Era:</strong> ${era} <br>
        <strong>Period:</strong> ${period} <br>
        <strong>Epoch:</strong> ${epoch} <br>
        <strong>Years:</strong> ${epochData.years} <br>
        <strong>Dominant Mammals:</strong> ${epochData.mammals} <br>
        <strong>Dominant Plants:</strong> ${epochData.plants} <br>
        <strong>Summary:</strong> This epoch shows major evolutionary and environmental changes. Humans or modern mammals may appear in late epochs.
    `;
}