import css from './ReservationForm.module.css';

const ReservationForm = () => {
  return (
    <>
      <p className={css.text_title}>Book your campervan now</p>
      <p className={css.text_subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form>
        <input
          className={css.input_info}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name"
          required
        />

        <input
          className={css.input_info}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          className={css.input_info}
          type="date"
          name="booking-date"
          placeholder="Booking date"
          pattern="\d{4}-\d{2}-\d{2}"
          required
        />

        <textarea
          className={css.input_comment}
          id="comment"
          name="comment"
          placeholder="Comment"
        ></textarea>

        <button className={css.btn_send} type="submit" value="Submit">
          Send
        </button>
      </form>
    </>
  );
};

export default ReservationForm;
