import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { HeaderContainer,LogoConatainer, OptionsContainer , OptionDiv, OptionLink } from "./header.styles";

const Header = ({ currentUser , hidden }) => (
  <HeaderContainer>
    <LogoConatainer to="/">
      <Logo className="logo" />
    </LogoConatainer>
    <OptionsContainer>
      <OptionLink  to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink  to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null :
      <CartDropdown />}
  </HeaderContainer>
);


// const Header = ({ currentUser , hidden }) => (
//   <div className="header">
//     <Link className="logo-container" to="/">
//       <Logo className="logo" />
//     </Link>
//     <div className="options">
//       <Link className="option" to="/shop">
//         SHOP
//       </Link>
//       <Link className="option" to="/contact">
//         CONTACT
//       </Link>
//       {currentUser ? (
//         <div className="option" onClick={() => auth.signOut()}>
//           SIGN OUT
//         </div>
//       ) : (
//         <Link className="option" to="/signin">
//           SIGN IN
//         </Link>
//       )}
//       <CartIcon />
//     </div>
//     {
//       hidden ? null :
//       <CartDropdown />}
//   </div>
// );

// const mapStateToProps = (state) =>({
//   currentUser : selectCurrentUser(state),
//   hidden : selectCartHidden(state)
// })
const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser,
  hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);
