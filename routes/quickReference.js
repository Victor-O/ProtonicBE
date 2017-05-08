
exports.getQuickReference = function (req, res) {

  res.format({
    json: function () {
      res.status(200).json(quickReference);
    }
  });
};

// initialize quick reference list
var quickReference = [
  {
    "title": "SI Fundamental Units",
    "desc": "",
    "details": [
      {
        "keyName": "Mass",
        "value": "Kilogram (kg)"
      },
      {
        "keyName": "Length",
        "value": "Meter (m)"
      },
      {
        "keyName": "Time",
        "value": "Second (s)"
      },
      {
        "keyName": "Temperature",
        "value": "Celsius (°C) / Kelvin (k)"
      },
      {
        "keyName": "Amount of substance",
        "value": "Mole (mol)"
      },
      {
        "keyName": "Electric current",
        "value": "Ampere (A)"
      },
      {
        "keyName": "Luminous intensity",
        "value": "Candela (cd)"
      }
    ]
  },
  {
    "title": "Strong acids and bases",
    "desc": "Strong acid and bases dissociate in water completely. <br /><br /> Strong acids: HCl, HBr, HNO3, HClO4, H2SO4 <br /> Strong bases: Ba(OH)2, Sr(OH)2, Alkali metal hydroxides",
    "details": []
  },
  {
    "title": "Activity series",
    "desc": "Metals below H+ cannot react with acids to form H2. <br /> More active metals are better reducing agents. <br /><br /> From most active to least active: Li+, Ba2+, Al3+, Fe2+, Pb2+, <b>H</b>+, Ag+, Pt2+, Au3+",
    "details": []
  },
  {
    "title": "Flame color",
    "desc": "",
    "details": [
      {
        "keyName": "Calcium",
        "value": "Brick red"
      },
      {
        "keyName": "Copper (I)",
        "value": "Blue"
      },
      {
        "keyName": "Copper (II)",
        "value": "Green or blue-green"
      },
      {
        "keyName": "Potassium",
        "value": "Lilac"
      },
      {
        "keyName": "Lithium",
        "value": "Dark red"
      },
      {
        "keyName": "Sodium",
        "value": "Bright yellow"
      },
      {
        "keyName": "Strontium",
        "value": "Red"
      },
      {
        "keyName": "Barium",
        "value": "Light green"
      },
      {
        "keyName": "Iron (III)",
        "value": "Gold"
      },
      {
        "keyName": "Cesium",
        "value": "Blue-violet"
      },
      {
        "keyName": "Indium",
        "value": "Blue"
      },
      {
        "keyName": "Lead",
        "value": "Blue"
      },
      {
        "keyName": "Rubidium",
        "value": "Red-violet"
      }
    ]
  },
  {
    "title": "Solution colors",
    "desc": "",
    "details": [
      {
        "keyName": "Copper (II)",
        "value": "Blue"
      },
      {
        "keyName": "Nickel",
        "value": "Green"
      },
      {
        "keyName": "Permanganate",
        "value": "Purple"
      },
      {
        "keyName": "Chromate",
        "value": "Yellow"
      },
      {
        "keyName": "Dichromate",
        "value": "Orange"
      },
      {
        "keyName": "Iron (II)",
        "value": "Light blue"
      },
      {
        "keyName": "Iron (III)",
        "value": "Rusty-Yellow"
      }
    ]
  },
  {
    "title": "Thermodynamic laws",
    "desc": "<b>First Law:</b> Energy cannot be created nor destroyed, it can only be transferred in the form of either heat or work. <br /><br /> <b>Second Law:</b> Any spontaneous reaction increases the entropy of the universe <br /><br /> <b>Third Law:</b> An ideal solid crystal at 0 K has an entropy of 0",
    "details": []
  },
  {
    "title": "Atomic Properties",
    "desc": "",
    "details": [
      {
        "keyName": "Atomic size",
        "value": "Half the distance between two adjacent nucleii."
      },
      {
        "keyName": "Ionic size",
        "value": "Cations are smaller than their parent atoms. Anions are larger than their parent atoms."
      },
      {
        "keyName": "N-th ionization energy",
        "value": "the energy required to remove the n-th electron from a ground state gaseous atom."
      },
      {
        "keyName": "Electron affinity",
        "value": "The energy released by adding an electon to a gaseous atom."
      },
      {
        "keyName": "Metallic character",
        "value": "The qualities of a metal. Metals are shiny and they are good conductors of heat and electricity. They have malleable solid form, can form basic ionic oxides and tend to form cations in an aqueous solution."
      }
    ]
  }
];