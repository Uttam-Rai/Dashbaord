import { Applicant } from "@shared/schema";

export const mockApplicants: Applicant[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    skills: ["JavaScript", "React", "Node.js"],
    status: "Applied",
    appliedDate: "2024-01-15",
    notes: "Strong technical background with excellent problem-solving skills."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    skills: ["Python", "Django", "SQL"],
    status: "In Review",
    appliedDate: "2024-01-12",
    notes: "Great communication skills and relevant project experience."
  },
  {
    id: 3,
    name: "Alex Davis",
    email: "alex.davis@email.com",
    skills: ["UI/UX", "Figma", "Prototyping"],
    status: "Selected",
    appliedDate: "2024-01-10",
    notes: "Excellent design portfolio with attention to detail."
  },
  {
    id: 4,
    name: "Maria Wilson",
    email: "m.wilson@email.com",
    skills: ["Java", "Spring", "MySQL"],
    status: "Rejected",
    appliedDate: "2024-01-08",
    notes: "Good technical skills but lacks relevant experience."
  },
  {
    id: 5,
    name: "David Chen",
    email: "david.chen@email.com",
    skills: ["React", "TypeScript", "GraphQL"],
    status: "In Review",
    appliedDate: "2024-01-20",
    notes: "Impressive portfolio with modern tech stack experience."
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    skills: ["Python", "Machine Learning", "TensorFlow"],
    status: "Applied",
    appliedDate: "2024-01-18",
    notes: "Strong academic background in computer science."
  },
  {
    id: 7,
    name: "Michael Brown",
    email: "michael.brown@email.com",
    skills: ["Vue.js", "Laravel", "PHP"],
    status: "Selected",
    appliedDate: "2024-01-14",
    notes: "Excellent full-stack development skills."
  },
  {
    id: 8,
    name: "Jessica Taylor",
    email: "jessica.taylor@email.com",
    skills: ["Angular", "C#", ".NET"],
    status: "Rejected",
    appliedDate: "2024-01-11",
    notes: "Technical skills present but limited practical experience."
  }
];

export const mockStats = {
  total: 127,
  inReview: 34,
  selected: 18,
  rejected: 75
};
