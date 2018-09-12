interface ITreatList {
  id: number,
  treatmentName: TreatNames,
  treatmentLimit: number,
  dis?: Dis[]
}

interface ITreatPricesVal {
  maxTreatValue: number;
  currentTreatValue: number;
}

enum TreatNames {
  GLASSES = "نظارة",
  EARS = "سماعة أذن",
  Treats = "علاجات",
  TEATH = "أسنان",
  NOCHILD = "عقم",
  CHRONIC = "أمراض مزمنة"
}

interface Dis {
  id: number,
  treatmentsListId: number,
  diseaseName: string
}
