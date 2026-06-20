export type Review = {
  id: string;
  name: string;
  businessType: string;
  service?: string;
  message: string;
  rating: number;
  initials: string;
  isVerified?: boolean;
  isSample?: boolean;
};

export const reviews: Review[] = [
  {
    id: "sample-01",
    name: "Sample Client A",
    businessType: "Local Retail Business",
    service: "Business Website",
    message:
      "The website structure made it easier for customers to understand the products and find the right contact option. The project communication was clear and practical.",
    rating: 5,
    initials: "A",
    isSample: true,
  },
  {
    id: "sample-02",
    name: "Sample Client B",
    businessType: "Restaurant Business",
    service: "Ordering & Billing Workflow",
    message:
      "The proposed ordering and billing workflow was explained in simple terms and planned around the way the restaurant team handles daily operations.",
    rating: 5,
    initials: "B",
    isSample: true,
  },
  {
    id: "sample-03",
    name: "Sample Client C",
    businessType: "Professional Services Business",
    service: "Lead Generation Website",
    message:
      "The project plan focused on mobile usability, enquiry generation, and straightforward content instead of adding unnecessary complexity.",
    rating: 5,
    initials: "C",
    isSample: true,
  },
  {
    id: "sample-04",
    name: "Sample Client D",
    businessType: "Fitness Business",
    service: "Gym Management System",
    message:
      "The member, attendance, and billing requirements were organized into a clear workflow that staff could understand before development started.",
    rating: 5,
    initials: "D",
    isSample: true,
  },
  {
    id: "sample-05",
    name: "Sample Client E",
    businessType: "Education Business",
    service: "School Administration Software",
    message:
      "The proposed dashboard brought student records, fees, attendance, and communication into one practical plan without making the system feel complicated.",
    rating: 5,
    initials: "E",
    isSample: true,
  },
  {
    id: "sample-06",
    name: "Sample Client F",
    businessType: "Boutique Business",
    service: "Inventory & Order Management",
    message:
      "The inventory and order process was mapped around the actual work done in the boutique, with clear priorities for stock, customer details, and reporting.",
    rating: 5,
    initials: "F",
    isSample: true,
  },
];
