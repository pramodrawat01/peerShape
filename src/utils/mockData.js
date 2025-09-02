export const studentsData = [

    {
        id: "std001",
        name: "John Doe",
        gender: "Male",
        year: "2nd Year",
        email: "john.doe@email.com",
        password :import.meta.env.VITE_JOHN_PASSWORD,
        profileImg: "/assets/male.jpg",
        enrolledCourses: [
            {
            id: "c001",
            title: "Full Stack Web Development",
            progress: 70, // percentage
            details: {
                instructor: "Prof. Sharma",
                duration: "6 months",
                startDate: "2025-01-15",
                endDate: "2025-07-15",
                modules: [
                { name: "HTML & CSS", completed: true },
                { name: "JavaScript Basics", completed: true },
                { name: "React.js", completed: true },
                { name: "Node.js", completed: false },
                { name: "MongoDB", completed: false }
                ]
            }
            },
            {
            id: "c002",
            title: "Data Structures & Algorithms",
            progress: 40,
            details: {
                instructor: "Dr. Verma",
                duration: "4 months",
                startDate: "2025-03-01",
                endDate: "2025-06-30",
                modules: [
                { name: "Arrays & Strings", completed: true },
                { name: "Linked List", completed: true },
                { name: "Stacks & Queues", completed: false },
                { name: "Trees & Graphs", completed: false }
                ]
            }
            },
            {
            id: "c003",
            title: "new course",
            progress: 40,
            details: {
                instructor: "Dr. Verma",
                duration: "4 months",
                startDate: "2025-03-01",
                endDate: "2025-06-30",
                modules: [
                { name: "Arrays & Strings", completed: true },
                { name: "Linked List", completed: true },
                { name: "Stacks & Queues", completed: false },
                { name: "Trees & Graphs", completed: false }
                ]
            }
            },
            
        ],

        competitions: [
            { id: "comp001", name: "Hackathon Spring 2025", position: "Top 10%" },
            { id: "comp002", name: "Code Wars", position: "2nd Place" }
        ],

        achievements: [
            "Certificate of Excellence in Web Development",
            "Best Team Player - Hackathon 2025"
        ],

        notifications: [
            "Your assignment on React.js is due tomorrow",
            "Hackathon result declared, check Leaderboard!"
        ]
    }, 
    {
        id: "std002",
        name: "Priya Sharma",
        gender: "Female",
        year: "1st Year",
        email: "priya.sharma@email.com",
        password :67890,
        profileImg: "/assets/female.jpg",

        enrolledCourses: [
            {
            id: "c003",
            title: "UI/UX Design Fundamentals",
            progress: 85,
            details: {
                instructor: "Ms. Ritu",
                duration: "3 months",
                startDate: "2025-02-01",
                endDate: "2025-04-30",
                modules: [
                { name: "Introduction to Design", completed: true },
                { name: "Wireframing", completed: true },
                { name: "Prototyping", completed: true },
                { name: "Design Systems", completed: false }
                ]
            }
            },
            {
            id: "c004",
            title: "Python for Beginners",
            progress: 55,
            details: {
                instructor: "Mr. Arjun",
                duration: "5 months",
                startDate: "2025-01-20",
                endDate: "2025-06-20",
                modules: [
                { name: "Basics & Syntax", completed: true },
                { name: "Loops & Functions", completed: true },
                { name: "OOP in Python", completed: false },
                { name: "File Handling", completed: false }
                ]
            }
            }
        ],

        competitions: [
            { id: "comp003", name: "UI/UX Challenge", position: "Winner" },
            { id: "comp004", name: "Python Coding Jam", position: "Top 20%" }
        ],

        achievements: [
            "Winner - National UI/UX Challenge",
            "Certificate in Python Programming"
        ],

        notifications: [
            "Your design submission deadline is in 3 days",
            "You have unlocked new module in Python course"
        ]
    },
    
]
