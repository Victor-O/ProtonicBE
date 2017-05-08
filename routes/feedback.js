
exports.getFeedback = function (req, res) {

  res.format({
    json: function () {
      res.status(200).json(feedback);
    }
  });
};

// initialize feedback
var feedback = [
  {
    "email": "Mihai.Panait@actavis.com",
    "occupation": "QC technician"
  },
  {
    "email": "Nicola.Constanta@actavis.com",
    "occupation": "QC technician"
  },
  {
    "email": "Oana.Cadere@actavis.com",
    "occupation": "Junior chemist analyst"
  },
  {
    "email": "AlinaSimona.Dinca@actavis.com",
    "occupation": "Junior chemist analyst"
  },
  {
    "email": "MarianaIonela.Calota@actavis.com",
    "occupation": "Senior chemist analyst"
  },
  {
    "email": "AncaCristina.Nica@actavis.com",
    "occupation": "R&D Junior Chemist Analyst"
  },
  {
    "email": "Mihai.Stoian@actavis.com",
    "occupation": "R&D Junior Chemist Analyst"
  }
];