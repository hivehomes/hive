import { User } from "@/lib/definitions";

// A function making an async request for all users.
export const fetchUsers = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    const result: { data: User } = await response.json();
}