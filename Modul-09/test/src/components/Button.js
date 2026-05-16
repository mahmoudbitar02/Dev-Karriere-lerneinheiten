import "./Button.css";

// function Button(props) {
//   console.log(props);
//   function handelAlertUser() {
//     props.aUser(props.text);
//   }

//   function compare(state) {
//     if (state) {
//       return (
//         <button type="button" onClick={handelAlertUser}>
//           {props.text} + {props.count}
//         </button>
//       );
//     } else {
//       return <div>Kein button für dich</div>;
//     }
//   }

//   //   return compare(props.statFromButton);

//   //   return props.statFromButton ? (
//   //     <button type="button" onClick={handelAlertUser}>
//   //       {props.text} + {props.count}
//   //     </button>
//   //   ) : (
//   //     <div>Kein button für dich</div>
//   //   );

//   return (
//     <>
//       {props.statFromButton && (
//         <button className="button-style" style={{ backgroundColor: "blue" }} type="button" onClick={handelAlertUser}>
//           {props.text} + {props.count}
//         </button>
//       )}
//       {!props.statFromButton && <div>Kein button für dich</div>}
//     </>
//   );
// }

function Button({ buttonName, title, aUser, statFromButton, bgColor }) {
  return (
    <>
      {statFromButton && (
        <button style={{ backgroundColor: bgColor }} type="button" onClick={() => aUser(buttonName)}>
          {buttonName} + {title}
        </button>
      )}
      {!statFromButton && <div>Kein button für dich</div>}
    </>
  );
}

export default Button;
