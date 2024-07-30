
import styles from './AdminContentModal.module.css';
import clsx from 'clsx';
import { useEffect } from 'react';

export default function AdminContentModal({ className, open, handleClose, modal_body, button1, button2, ...props }) {
  useEffect(() => {
    if (!open) return;

    const onKeyPressHandler = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', onKeyPressHandler);

    return () => {
      document.removeEventListener('keydown', onKeyPressHandler);
    };
  }, [open, handleClose]);

  if (!open) return null;

	return (
		<content className={clsx(className, styles.content)}{...props}>
			<div className={styles.modal_backdrop}>
				<div className={styles.modal_header}>
					<button className={styles.closeButton} onClick={handleClose}>X</button>
				</div>
				<div className={styles.modal_content}>
					{modal_body}
				</div>
				<div className={styles.modal_footer}>
					{button1}
					{button2}
				</div>
			</div>
		</content>
	);
}
