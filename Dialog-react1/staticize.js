/**
 * @see: https://github.com/vivedu/VI-Classroom-Teacher/issues/106
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import initI18n from 'helpers/initI18n'
import Dialog from './Dialog'

// @see https://github.com/vivedu/VI-Classroom-Teacher/issues/647
const intl = initI18n()

const staticize = ({
  className,
  // @see https://github.com/vivedu/VI-Classroom-Teacher/issues/606
  mode,
  title,
  message,
  showCancel,
  confirmText,
  cancelText,
}) =>
  new Promise((fulfill) => {
    const holder = document.createElement('div')

    document.body.appendChild(holder)

    const close = () => {
      document.body.removeChild(holder)
    }

    ReactDOM.render(
      <IntlProvider locale={intl.locale} messages={intl.messages}>
        <Dialog
          className={className}
          mode={mode}
          title={title}
          message={message}
          confirmText={confirmText}
          showCancel={showCancel}
          cancelText={cancelText}
          onCancel={close}
          onConfirm={() => {
            close()
            fulfill()
          }}
        />
      </IntlProvider>,
      holder
    )
  })

export default staticize
