import { useState } from "react"

interface IconProps {
  fillColor: string
}

export const EmailIcon = (props: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 6.66675L9.075 11.0501C9.34888 11.2328 9.67075 11.3303 10 11.3303C10.3292 11.3303 10.6511 11.2328 10.925 11.0501L17.5 6.66675M4.16667 15.8334H15.8333C16.2754 15.8334 16.6993 15.6578 17.0118 15.3453C17.3244 15.0327 17.5 14.6088 17.5 14.1667V5.83341C17.5 5.39139 17.3244 4.96746 17.0118 4.6549C16.6993 4.34234 16.2754 4.16675 15.8333 4.16675H4.16667C3.72464 4.16675 3.30072 4.34234 2.98816 4.6549C2.67559 4.96746 2.5 5.39139 2.5 5.83341V14.1667C2.5 14.6088 2.67559 15.0327 2.98816 15.3453C3.30072 15.6578 3.72464 15.8334 4.16667 15.8334Z" stroke={props.fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const PhoneIcon = (props: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z" stroke={props.fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

const InstagramIcon = (props: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99992 3.87187C11.9959 3.87187 12.2326 3.87935 13.0213 3.91548C15.0471 4.00768 15.9934 4.9689 16.0856 6.97982C16.1217 7.76786 16.1286 8.00458 16.1286 10.0005C16.1286 11.9971 16.1211 12.2332 16.0856 13.0213C15.9928 15.0303 15.049 15.9934 13.0213 16.0856C12.2326 16.1217 11.9971 16.1292 9.99992 16.1292C8.00396 16.1292 7.76723 16.1217 6.97919 16.0856C4.94835 15.9928 4.00706 15.0272 3.91486 13.0206C3.87873 12.2326 3.87125 11.9965 3.87125 9.99992C3.87125 8.00396 3.87935 7.76786 3.91486 6.97919C4.00768 4.9689 4.95146 4.00706 6.97919 3.91486C7.76786 3.87935 8.00396 3.87187 9.99992 3.87187ZM9.99992 2.52441C7.9697 2.52441 7.71553 2.53314 6.91814 2.56927C4.20329 2.69386 2.69448 4.20017 2.56989 6.91752C2.53314 7.71553 2.52441 7.9697 2.52441 9.99992C2.52441 12.0301 2.53314 12.2849 2.56927 13.0823C2.69386 15.7972 4.20017 17.306 6.91752 17.4306C7.71553 17.4667 7.9697 17.4754 9.99992 17.4754C12.0301 17.4754 12.2849 17.4667 13.0823 17.4306C15.7947 17.306 17.3072 15.7997 17.4299 13.0823C17.4667 12.2849 17.4754 12.0301 17.4754 9.99992C17.4754 7.9697 17.4667 7.71553 17.4306 6.91814C17.3085 4.20578 15.8003 2.69448 13.0829 2.56989C12.2849 2.53314 12.0301 2.52441 9.99992 2.52441V2.52441ZM9.99992 6.16125C7.87999 6.16125 6.16125 7.87999 6.16125 9.99992C6.16125 12.1198 7.87999 13.8392 9.99992 13.8392C12.1198 13.8392 13.8386 12.1205 13.8386 9.99992C13.8386 7.87999 12.1198 6.16125 9.99992 6.16125ZM9.99992 12.4918C8.6238 12.4918 7.50808 11.3767 7.50808 9.99992C7.50808 8.6238 8.6238 7.50808 9.99992 7.50808C11.376 7.50808 12.4918 8.6238 12.4918 9.99992C12.4918 11.3767 11.376 12.4918 9.99992 12.4918ZM13.9906 5.11281C13.4947 5.11281 13.0929 5.51462 13.0929 6.00987C13.0929 6.50512 13.4947 6.90693 13.9906 6.90693C14.4858 6.90693 14.887 6.50512 14.887 6.00987C14.887 5.51462 14.4858 5.11281 13.9906 5.11281Z" stroke={props.fillColor} fill="#8BAC3E" />
  </svg>
)

const FooterIcons = () => {
  const [hoverEmail, setHoverEmail] = useState<boolean>(false);
  const [hoverPhone, setHoverPhone] = useState<boolean>(false);
  const [hoverInstagram, setHoverInstagram] = useState<boolean>(false);

  return (
    <div className="footer-icons">
      <div
        className={`footer-icon ${hoverEmail ? "footer-icon--hovered" : ""}`}
        onMouseEnter={() => setHoverEmail(true)}
        onMouseLeave={() => setHoverEmail(false)}
      >
        <EmailIcon fillColor={hoverEmail ? "white" : "#8BAC3E"} />
      </div>
      <div
        className={`footer-icon ${hoverPhone ? "footer-icon--hovered" : ""}`}
        onMouseEnter={() => setHoverPhone(true)}
        onMouseLeave={() => setHoverPhone(false)}
      >
        <PhoneIcon fillColor={hoverPhone ? "white" : "#8BAC3E"} />
      </div>
      <div
        className={`footer-icon ${hoverInstagram ? "footer-icon--hovered" : ""}`}
        onMouseEnter={() => setHoverInstagram(true)}
        onMouseLeave={() => setHoverInstagram(false)}
      >
        <InstagramIcon fillColor={hoverInstagram ? "white" : "#8BAC3E"} />
      </div>
    </div>
  );
};

export default FooterIcons