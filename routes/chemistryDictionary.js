
exports.getChemistryDictionary = function (req, res) {

  res.format({
    json: function () {
      res.status(200).json(chemistryDictionary);
    }
  });
};

// initialize the chemistry dictionary
var chemistryDictionary = [
  {
    "letter" : "A",
    "name": "Absolute Entropy (of a substance)",
    "description": "The increase in the entropy of a substance as it goes from a perfectly ordered crystalline form at 0 °K (where its entropy is zero) to the temperature in question."
  },
  {
    "letter" : "A",
    "name": "Absolute Zero",
    "description": "The zero point on the absolute temperature scale; -273.15°C or 0 K; theoretically, the temperature at which molecular motion ceases."
  },
  {
    "letter" : "A",
    "name": "Acid",
    "description": "A substance that produces H+(aq) ions in aqueous solution. Strong acids ionize completely or almost completely in dilute aqueous solution. Weak acids ionize only slightly."
  },
  {
    "letter" : "A",
    "name": "Addition Reaction",
    "description": "A reaction in which two atoms or groups of atoms are added to a molecule, one on each side of a double or triple bond."
  },
  {
    "letter" : "A",
    "name": "Artificial Transmutation",
    "description": "An artificially induced nuclear reaction caused by the bombardment of a nucleus with subatomic particiles or small nucei."
  },
  {
    "letter" : "A",
    "name": "Atomic Weight",
    "description": "Weighted average of the masses of the constituent isotopes of an element; The relative masses of atoms of different elements."
  },
  {
    "letter" : "B",
    "name": "Background Radiation",
    "description": "Ratiation extraneous to an experiment. Usually the low-level natural radiation form cosmic rays and trace radioactive substances present in our environment."
  },
  {
    "letter" : "B",
    "name": "Base",
    "description": "A substance that produces OH (aq) ions in aqueous solution. Strong soluable bases are soluble in water and are completely dissociated. Weak bases ionize only slightly."
  },
  {
    "letter" : "B",
    "name": "Binary Acid",
    "description": "A binary compound in which H is bonded to one or more of the more electronegative nonmetals."
  },
  {
    "letter" : "B",
    "name": "Boiling Point Elevation",
    "description": "The increase in the boiling point of a solvent caused by the dissolution of a nonvolatile solute."
  },
  {
    "letter" : "B",
    "name": "Calorie",
    "description": "The amount of heat required to raise the temperature of one gram of water from 14.5°C to 15.5°C. 1 calorie = 4.184 joules."
  },
  {
    "letter" : "C",
    "name": "Catalyst",
    "description": "A substance that speeds up a chemical reaction without being consumed itself in the reaction. A substance that alters (usually increases) the rate at which a reaction occurs."
  },
  {
    "letter" : "C",
    "name": "Chain Reaction",
    "description": "A reaction that, once initiated, sustains itself and expands. This is a reaction in which reactive species, such as radicals, are produced in more than one step. These reactive species, radicals, propagate the chain reaction."
  },
  {
    "letter" : "C",
    "name": "Chemical Equilibrium",
    "description": "A state of dynamic balance in which the rates of forward and reverse reactions are equal; there is no net change in concentrations of reactants or products while a system is at equilibrium."
  },
  {
    "letter" : "C",
    "name": "Concentration",
    "description": "Amount of solute per unit volume or mass of solvent or of solution."
  },
  {
    "letter" : "C",
    "name": "Coulomb",
    "description": "Unit of electrical charge."
  },
  {
    "letter" : "D",
    "name": "Derivative",
    "description": "A compound that can be imagined to arise from a partent compound by replacement of one atom with another atom or group of atoms. Used extensively in orgainic chemistry to assist in identifying compounds."
  },
  {
    "letter" : "D",
    "name": "Deuterium",
    "description": "An isotope of hydrogen whose atoms are twice as massive as ordinary hydrogen;deuterion atoms contain both a proton and a neutron in the nucleus."
  },
  {
    "letter" : "D",
    "name": "Diamagnetism",
    "description": "Weak repulsion by a magnetic field."
  },
  {
    "letter" : "D",
    "name": "Dilution",
    "description": "Process of reducing the concentration of a solute in solution, usually simply by mixing with more solvent."
  },
  {
    "letter" : "D",
    "name": "Distillate",
    "description": "The material in a distillation apparatus that is collected in the receiver."
  },
  {
    "letter" : "E",
    "name": "Effective Nuclear Charge",
    "description": "    The nuclear charge experienced by the outermost electrons of an atom; the actual nuclear charge minus the effects of shielding due to inner-shell electrons. Example: Set of dx2-y2 and dz2 orbitals; those d orbitals within a set with lobes directed along the x-, y-, and z-axes."
  },
  {
    "letter" : "E",
    "name": "Electrolysis",
    "description": "Process that occurs in electrolytic cells."
  },
  {
    "letter" : "E",
    "name": "Electron Affinity",
    "description": "The amount of energy absorbed in the process in which an electron is added to a neutral isolated gaseous atom to form a gaseous ion with a 1- charge; has a negative value if energy is released."
  },
  {
    "letter" : "E",
    "name": "Electron Configuration",
    "description": "Specific distribution of electrons in atomic orbitals of atoms or ions."
  },
  {
    "letter" : "E",
    "name": "Equivalence Point",
    "description": "The point at which chemically equivalent amounts of reactants have reacted."
  },
  {
    "letter" : "F",
    "name": "Faraday",
    "description": "One faraday of electricity corresponds to the charge on 6.022 x 10 23 electrons, or 96,487 coulombs."
  },
  {
    "letter" : "F",
    "name": "Ferromagnetism",
    "description": "The ability of a substance to become permanently magnetized by exposure to an external magnetic field."
  },
  {
    "letter" : "F",
    "name": "Fluorescence",
    "description": "Absorption of high energy radiation by a substance and subsequent emission of visible light."
  },
  {
    "letter" : "F",
    "name": "Free Radical",
    "description": "A highly reactive chemical species carrying no charge and having a single unpaired electron in an orbital."
  },
  {
    "letter" : "G",
    "name": "Galvanizing",
    "description": "Placing a thin layer of zinc on a ferrous material to protect the underlying surface from corrosion.s"
  },
  {
    "letter" : "G",
    "name": "Geiger counter",
    "description": "A gas filled tube which discharges electriaclly when ionizing radiation passes through it."
  },
  {
    "letter" : "G",
    "name": "Ground State",
    "description": "The lowest energy state or most stable state of an atom, molecule or ion."
  },
  {
    "letter" : "H",
    "name": "Half-Life",
    "description": "    The time required for half of a reactant to be converted into product(s). The time required for half of a given sample to undergo radioactive decay."
  },
  {
    "letter" : "H",
    "name": "Hard Water",
    "description": "Water containing Fe3+, Ca2+, and Mg2+ ions, which forms precipates with soap."
  },
  {
    "letter" : "H",
    "name": "Heat of Crystallization",
    "description": "The amount of heat that must be removed from one gram of a liquid at its freezing point to freeze it with no change in temperature."
  },
  {
    "letter" : "H",
    "name": "Heavy Water",
    "description": "Water containing deuterium, a heavy isotope of hydrogen."
  },
  {
    "letter" : "H",
    "name": "Hydrolysis",
    "description": "The reaction of a substance with water or its ions."
  },
  {
    "letter" : "I",
    "name": "Isomers",
    "description": "Different substances that have the same formula."
  },
  {
    "letter" : "I",
    "name": "Ionization Constant",
    "description": "Equilibrium constant for the ionization of a weak electrolyte."
  },
  {
    "letter" : "I",
    "name": "Isotopes",
    "description": "Two or more forms of atoms of the same element with different masses; atoms containing the same number of protons but different numbers of neutrons."
  },
  {
    "letter" : "I",
    "name": "Insulator",
    "description": "Poor electric and heat conductor."
  },
  {
    "letter" : "L",
    "name": "Leveling Effect",
    "description": "Effect by which all acids stronger than the acid that is characteristic of the solvent react with solvent to produce that acid; similar statement applies to bases. The strongest acid (base) that can exist in a given solvent is the acid (base) characteristic of the solvent."
  },
  {
    "letter" : "L",
    "name": "Line Spectrum",
    "description": "An atomic emission or absorption spectrum."
  },
  {
    "letter" : "L",
    "name": "Linkage Isomers",
    "description": "Isomers in which a particular ligand bonds to a metal ion through different donor atoms."
  },
  {
    "letter" : "L",
    "name": "Lone Pair",
    "description": "Pair of electrons residing on one atom and not shared by other atoms; unshared pair."
  },
  {
    "letter" : "M",
    "name": "Mass",
    "description": "A measure of the amount of matter in an object. Mass is usually measured in grams or kilograms."
  },
  {
    "letter" : "M",
    "name": "Miscibility",
    "description": "The ability of one liquid to mix with (dissolve in) another liquid."
  },
  {
    "letter" : "M",
    "name": "Molarity",
    "description": "Number of moles of solute per litre of solution."
  },
  {
    "letter" : "M",
    "name": "Molality",
    "description": "Concentration expressed as number of moles of solute per kilogram of solvent."
  },
  {
    "letter" : "M",
    "name": "Molecular Weight",
    "description": "The mass of one molecule of a nonionic substance in atomic mass units."
  },
  {
    "letter" : "N",
    "name": "Native State",
    "description": "Refers to the occurrence of an element in an uncombined or free state in nature."
  },
  {
    "letter" : "N",
    "name": "Nuclear Fission",
    "description": "The process in which a heavy nucleus splits into nuclei of intermediate masses and one or more protons are emitted."
  },
  {
    "letter" : "N",
    "name": "Nucleons",
    "description": "Particles comprising the nucleus; protons and neutrons."
  },
  {
    "letter" : "N",
    "name": "Nucleus",
    "description": "The very small, very dense, positively charged center of an atom containing protons and neutrons, as well as other subatomic particles."
  },
  {
    "letter" : "N",
    "name": "Nuclides",
    "description": "Refers to different atomic forms of all elements in contrast to ?isotopes?, which refer only to different atomic forms of a single element."
  },
  {
    "letter" : "N",
    "name": "Net Ionic Equation",
    "description": "Equation that results from canceling spectator ions and eliminating brackets from a total ionic equation."
  },
  {
    "letter" : "O",
    "name": "Organic Chemistry",
    "description": "The chemistry of substances that contain carbon-hydrogen bonds."
  },
  {
    "letter" : "O",
    "name": "Oxidation",
    "description": "An algebraic increase in the oxidation number; may correspond to a loss of electrons."
  },
  {
    "letter" : "O",
    "name": "Octahedral",
    "description": "A term used to describe molecules and polyatomic ions that have one atom in the center and six atoms at the corners of a octahedron."
  },
  {
    "letter" : "O",
    "name": "Osmosis",
    "description": "The process by which solvent molecules pass through a semipermable membrane from a dilute solution into a more concentrated solution."
  },
  {
    "letter" : "P",
    "name": "Pairing Energy",
    "description": "Energy required to pair two electrons in the same orbital."
  },
  {
    "letter" : "P",
    "name": "Pairing",
    "description": "A favourable interaction of two electrons with opposite m , values in the same orbital."
  },
  {
    "letter" : "P",
    "name": "Plasma",
    "description": "A physical state of matter which exists at extremely high temperatures in which all molecules are dissociated and most atoms are ionized."
  },
  {
    "letter" : "P",
    "name": "Polar Bond",
    "description": "Covalent bond in which there is an unsymmetrical distribution of electron density."
  },
  {
    "letter" : "P",
    "name": "Polymerization",
    "description": "The combination of many small molecules to form large molecules."
  },
  {
    "letter" : "P",
    "name": "Polymer",
    "description": "A large molecule consisting of chains or rings of linked monomer units, usually characterized by high melting and boiling points."
  },
  {
    "letter" : "R",
    "name": "Radiation",
    "description": "High energy particles or rays emitted during the nuclear decay processes."
  },
  {
    "letter" : "R",
    "name": "Radical",
    "description": "An atom or group of atoms that contains one or more unpaired electrons (usually very reactive species)"
  },
  {
    "letter" : "R",
    "name": "Resonance",
    "description": "The concept in which two or more equivalent dot formulas for the same arrangement of atoms (resonance structures) are necessary to describe the bonding in a molecule or ion."
  },
  {
    "letter" : "R",
    "name": "Reverse Osmosis",
    "description": "Forcing solvent molecules to flow through a semipermable membrane from a concentated solution into a dilute solution by the application of greater hydrostatic pressure on concentrated side than the osmotic pressure opposing it."
  },
  {
    "letter" : "S",
    "name": "Semiconductor",
    "description": "A substance that does not conduct electricity at low temperatures but does so at higher temperatures."
  },
  {
    "letter" : "S",
    "name": "Silicones",
    "description": "Polymeric organosilicon compounds; contain individual or cross-linked Si-O chains or rings in which some oxygens of SiO4 tetrahedra are replaced by other groups."
  },
  {
    "letter" : "S",
    "name": "Single Bond",
    "description": "Covalent bond resulting from the sharing of two electrons (one pair) between two atoms."
  },
  {
    "letter" : "S",
    "name": "Spectator Ions",
    "description": "Ions in a solution that do not participate in a chemical reaction."
  },
  {
    "letter" : "S",
    "name": "Shielding Effect",
    "description": "Electrons in filled sets of s , p orbitals between the nucleus and outer shell electrons shield the outer shell electrons somewhat from the effect of protons in the nucleus; also called screening effect."
  },
  {
    "letter" : "T",
    "name": "Ternary Compound",
    "description": "A compound consisting of three elements; may be ionic or covalent."
  },
  {
    "letter" : "T",
    "name": "Total Ionic Equation",
    "description": "Equation for a chemical reaction written to show the predominant form of all species in aqueous solution or in contact with water."
  },
  {
    "letter" : "V",
    "name": "Valence Electrons",
    "description": "Outermost electrons of atoms; usually those involved in bonding."
  },
  {
    "letter" : "V",
    "name": "Vapor Pressure",
    "description": "The particle pressure of a vapor at the surface of its parent liquid."
  }
];