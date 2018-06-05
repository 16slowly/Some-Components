/**
 * @see https://github.com/vivedu/VI-Classroom-Teacher/issues/426
 */
import React from 'react'
import cx from 'classnames'
import Button from 'components/Button'
import SVGIcon from 'components/SVGIcon'
import { injectIntl } from 'react-intl'
import styles from './Dialog.scss'

const Dialog = ({
  className,
  // @see https://github.com/vivedu/VI-Classroom-Teacher/issues/606
  mode = 'normal',
  title,
  message,
  showCancel,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  // @see https://github.com/vivedu/VI-Classroom-Teacher/issues/647
  intl: { messages: locale },
}) => (
  // @see https://github.com/vivedu/VI-Classroom-Teacher/issues/627
  <div className={cx(styles.root, className)}>
    <div className={styles.modal}>
      <div className={cx(styles.header, styles[mode])}>
        <h1 className={styles.title}>{title}</h1>
        <Button className={styles.close} onClick={onCancel}>
          <SVGIcon name="close-modal" />
        </Button>
      </div>
      <div className={styles.content}>
        <div className={styles.message}>{message}</div>
        <div className={styles.buttons}>
          {showCancel && (
            <Button
              className={cx(styles.button, styles.cancel)}
              onClick={onCancel}
            >
              {cancelText || locale.cancel}
            </Button>
          )}
          <Button
            className={cx(styles.button, styles.active)}
            onClick={onConfirm}
          >
            {confirmText || locale.ok}
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export default injectIntl(Dialog)
