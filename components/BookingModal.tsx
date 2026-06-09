"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface BookingModalProps {
    open: boolean;
    onClose: () => void;
}

export default function BookingModal({
    open,
    onClose,
}: BookingModalProps) {
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    if (!open) return null;

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);

        const form = new FormData(e.currentTarget);

        const payload = Object.fromEntries(form);

        try {
            const res = await fetch("/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                alert("Booking submitted successfully");
                onClose();
            }
        } catch (err) {
            console.error(err);
        }

        setLoading(false);
    };

    return (
        <>
            <div className="booking-overlay" onClick={onClose} />

            <div className="booking-modal">
                <button
                    className="booking-close"
                    onClick={onClose}
                >
                    ×
                </button>

                <h2>Book Your Shoot</h2>

                <form onSubmit={handleSubmit} className="booking-form">
                    <input
                        name="name"
                        placeholder="Full Name"
                        required
                    />

                    <input
                        name="mobile"
                        placeholder="Mobile Number"
                        required
                    />


                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                    />

                    <select name="service" required>
                        <option value="">Select Service</option>
                        <option value="Kids Portfolio Shoot">
                            Kids Portfolio Shoot
                        </option>
                        <option value="Model Portfolio">
                            Model Portfolio
                        </option>
                        <option value="Fashion Photography">
                            Fashion Photography
                        </option>
                        <option value="Corporate Headshots">
                            Corporate Headshots
                        </option>
                        <option value="Family Shoot">
                            Family Shoot
                        </option>
                        <option value="Personal Branding">
                            Personal Branding
                        </option>
                    </select>

                    <div className="date-field">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date: Date | null) => setSelectedDate(date)}
                            placeholderText="Preferred Shoot Date"
                            minDate={new Date()}
                            dateFormat="dd MMM yyyy"
                            wrapperClassName="date-picker-wrapper"
                            className="date-picker-input"
                        />
                    </div>

                    <select name="timeSlot" required>
                        <option value="">Select Time Slot</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                    </select>

                    <input
                        name="location"
                        placeholder="City / Area"
                    />

                    <textarea
                        name="message"
                        placeholder="Tell us about your requirement"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Book My Shoot"}
                    </button>
                </form>
            </div>

            <style jsx>{`
  .booking-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(6px);
    z-index: 9998;
  }

  .booking-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(95vw, 700px);
    background: #111;
    border: 1px solid rgba(184, 150, 12, 0.25);
    border-radius: 16px;
    padding: 28px;
    z-index: 9999;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }

  .booking-close {
    position: absolute;
    top: 12px;
    right: 14px;
    background: transparent;
    border: none;
    color: #f5f0e8;
    font-size: 28px;
    cursor: pointer;
  }

  h2 {
    color: #f5f0e8;
    margin-bottom: 20px;
    font-family: "Cormorant Garamond", serif;
    font-size: 2rem;
    font-weight: 500;
  }

  .booking-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .date-field {
    width: 100%;
  }

  .booking-form textarea,
  .booking-form button {
    grid-column: 1 / -1;
  }

  .booking-form input,
  .booking-form select,
  .booking-form textarea,
  .date-picker {
    width: 100%;
    background: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #f5f0e8;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
  }

  .booking-form input,
  .booking-form select,
  .date-picker {
    height: 50px;
    padding: 0 14px;
  }

  .booking-form textarea {
    min-height: 100px;
    padding: 14px;
    resize: none;
  }

  .booking-form input::placeholder,
  .booking-form textarea::placeholder,
  .date-picker::placeholder {
    color: rgba(245, 240, 232, 0.45);
  }

  .booking-form input:focus,
  .booking-form select:focus,
  .booking-form textarea:focus,
  .date-picker:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.15);
  }

  button[type="submit"] {
    height: 52px;
    border: none;
    border-radius: 8px;
    background: #b8960c;
    color: #111;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button[type="submit"]:hover {
    background: #d4af37;
  }

  @media (max-width: 640px) {
    .booking-modal {
      width: calc(100vw - 24px);
      padding: 20px;
      max-height: 90vh;
      overflow-y: auto;
    }

    .booking-form {
      grid-template-columns: 1fr;
    }
  }
`}</style>
        </>
    );
}