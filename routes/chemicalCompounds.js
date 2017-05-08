
exports.getChemicalCompounds = function (req, res) {

  res.format({
    json: function () {
      res.status(200).json(compounds);
    }
  });
};

// initialize chemical compounds list
var compounds = [
  {
    "name" : "Acetic acid",
    "formula": "CH3COOH + H2O",
    "commonName": "5% Solution: White vinegar"
  },
  {
    "name" : "Acetone",
    "formula": "CH3COCH3",
    "commonName": "Acetone"
  },
  {
    "name" : "Acetylene gas",
    "formula": "C2H2",
    "commonName": "Ethyne"
  },
  {
    "name" : "Acetylsalicylic acid",
    "formula": "C9H8O4",
    "commonName": "Aspirin"
  },
  {
    "name" : "Bismuth subsalicylate",
    "formula": "C7H5BiO4",
    "commonName": "Pepto-Bismol"
  },
  {
    "name" : "Boric acid",
    "formula": "H3BO3",
    "commonName": "Ant/Roach Killer"
  },
  {
    "name" : "Cadmium sulfide",
    "formula": "CdS",
    "commonName": "Cadmium Yellow"
  },
  {
    "name" : "Cyanuric acid",
    "formula": "C3H3N3O3",
    "commonName": "Isocyanuric acid"
  },
  {
    "name" : "Calcium oxide",
    "formula": "CaO",
    "commonName": "Lime, Quicklime"
  },
  {
    "name" : "Dextrose, glucose",
    "formula": "C6H12O6",
    "commonName": "Glucose, corn syrup"
  },
  {
    "name" : "Dichloromethane",
    "formula": "CH2Cl2",
    "commonName": "Methylene chloride"
  },
  {
    "name" : "Fructose",
    "formula": "C6H12O6",
    "commonName": "Fruit Sugar"
  },
  {
    "name" : "Hypochlorous acid",
    "formula": "HClO",
    "commonName": "Laundry Bleach"
  },
  {
    "name" : "Ferric oxide",
    "formula": "Fe2O3",
    "commonName": "Rust"
  },
  {
    "name" : "Methane",
    "formula": "CH4",
    "commonName": "Natural Gas"
  },
  {
    "name" : "Magnesium silicate",
    "formula": "Mg3Si4O10(OH)2",
    "commonName": "Talc"
  },
  {
    "name" : "Oxalic acid",
    "formula": "C2H2O4",
    "commonName": "Rust remover, non-chlorine bleach powder cleanser"
  },
  {
    "name" : "Silicon dioxide",
    "formula": "SiO2",
    "commonName": "Sand, silica"
  },
  {
    "name" : "Sodium chloride",
    "formula": "NaCl",
    "commonName": "Salt"
  },
  {
    "name" : "Sodium hypochlorite",
    "formula": "NaClO",
    "commonName": "Bleach"
  },
  {
    "name" : "Sucrose",
    "formula": "C12H22O11",
    "commonName": "Sugar"
  },
  {
    "name" : "Tannic acid",
    "formula": "C76H52O46",
    "commonName": "Tannin"
  }
];
