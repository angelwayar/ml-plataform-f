"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/app/(landing)/_components/Modal";
import Form from "@/app/(landing)/login/form";

export default function Navbar() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    return (
        <header>
            <h1>Home</h1>
            <div>
                <button onClick={() => router.push('/register')}>Register</button>
                <button onClick={() => setShowModal(true)}>Login</button>
            </div>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <Form />
            </Modal>
        </header>
    )
}
