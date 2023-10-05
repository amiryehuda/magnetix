import { FC } from "react";

// import Popup from '../Popup';

// interface ConfirmationModalProps {
//   open: boolean;
//   onCloseHandler: () => void;
//   onApproveHandler: () => void;
//   headerString: string;
//   bodyString: string;
//   cancelButton?: boolean;
//   actionString: string;
//   customWidth?: number;
//   loading?: boolean;
//   closeButton?: boolean;
// }

// const ConfirmationPopup: FC<ConfirmationModalProps> = ({
//   headerString,
//   bodyString,
//   actionString,
//   open,
//   onCloseHandler,
//   onApproveHandler,
//   cancelButton = true,
//   customWidth = 500,
//   loading = false,
//   closeButton = true
// }) => {
//   return (
//     <Popup onCloseHandler={onCloseHandler} open={open} customWidth={customWidth}>
//       <Popup.Header handleClose={closeButton && onCloseHandler}>{headerString}</Popup.Header>
//       <Popup.Body>{bodyString}</Popup.Body>
//       <Popup.ButtonsContainer>
//         {cancelButton && (
//           <Popup.Button buttonType="tertiary" size="medium" onClick={onCloseHandler}>
//             Cancel
//           </Popup.Button>
//         )}
//         <Popup.Button
//           data-testid="confirm"
//           buttonType="primary"
//           size="medium"
//           onClick={onApproveHandler}
//           loading={loading}
//         >
//           {actionString}
//         </Popup.Button>
//       </Popup.ButtonsContainer>
//     </Popup>
//   );
// };

// export default ConfirmationPopup;
