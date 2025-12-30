import React, { useState } from 'react';
import '../styles/main.css'; // or auth.css, whichever you use for general styles
import { handlesuccess, handleerror } from '../util'; // reuse your utils if present

export default function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', message: '', rating: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic frontend validation
    if (!form.name || !form.email || !form.message) {
      handleerror('Please fill name, email and message');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          rating: form.rating ? Number(form.rating) : null
        })
      });

      const result = await res.json();
      if (res.ok) {
        handlesuccess(result.message || 'Thanks for feedback!');
        setForm({ name: '', email: '', message: '', rating: '' });
      } else {
        handleerror(result.message || 'Failed to send feedback');
      }
    } catch (err) {
      handleerror('Server error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="content" style={{ maxWidth: 900 }}>
        <div className="contentfull">
          <h2 className="Careiname2">Send Feedback</h2>
          <p className="frontpara">We appreciate your feedback — it helps us improve Carei.</p>

          <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
            <div className="form-group">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>

            <div className="form-group">
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />
            </div>

            <div className="form-group">
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your feedback" rows="5" />
            </div>

            <div className="form-group" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <label style={{ marginRight: 8 }}>Rating</label>
              <select name="rating" value={form.rating} onChange={handleChange}>
                <option value="">-- optional --</option>
                <option value="5">5 — Excellent</option>
                <option value="4">4 — Very good</option>
                <option value="3">3 — Good</option>
                <option value="2">2 — Fair</option>
                <option value="1">1 — Poor</option>
              </select>
            </div>

            <button className="frontbtn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Feedback'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
