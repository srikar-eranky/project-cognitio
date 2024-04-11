import Link from '"next/link"'
const tuesdayJournal = () => {
    return (  
        <>
      <style js="true" global="true">
        {`
      body {
          background: linear-gradient(12.8deg, #C5EFCB -29.07%, #5B7F77 94.75%);
       }
        `}
      </style>
      <Navbar />
      <h1 className={styles.title}>Journal</h1>
      <div className={styles.bookContainer}>
        <Link> 
        <LeftBtn href="./tues.js"/> 
        </Link>
        
        <img className={styles.book} src="book.svg"></img>
        <div className={styles.textBoxContainer}>
        I appreciate the opportunity to learn and grow every day, the support of my loved ones, and the ability to connect with interesting people like you. 
        </div>
        <div className={styles.promptContainer}>
          <h3 className={styles.date}>
            April 10, 2024
          </h3>
          <h2 className={styles.prompt}> What are three things you appreciate about your life right now?
          </h2>
        </div>
        <RightBtn />
      </div>
    </>
    );
}
 
export default tuesdayJournal;