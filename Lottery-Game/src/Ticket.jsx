import TicketNum from "./TicketNum";
import "./ticket.css";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h2>Ticket</h2>
      {ticket.map((num, idx) => (
        <TicketNum num={num} kry={idx} />
      ))}
    </div>
  );
}
