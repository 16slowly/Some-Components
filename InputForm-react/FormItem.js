/**
 * FormItem 组件
 *
 * @see https://github.com/vivedu/VI-Classroom-Student/issues/54
 */

import React from 'react'
import cx from 'classnames'
import styles from './FormItem.scss'

class FormItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }

  onVerify = (value, validate) => {
    const result = validate.test(value)

    this.setState({
      isLight: !result,
    })

    if (result) {
      this.props.getValue(value)
    }
  }

  onSelectPath = () => {
    if (this.input) {
      this.input.click()
    }
  }

  renderInput = () => {
    const { isLight, value } = this.state
    const { type, validate } = this.props

    if (type === 'file') {
      return (
        <div className={styles.fileField}>
          <input
            className={cx(styles.input, { [styles.hightLight]: isLight })}
            type="text"
            value={value}
            maxLength="30"
            onBlur={e => this.onVerify(value || e.target.value, validate)}
          />
          <button
            className={styles.selectFileButton}
            onClick={this.onSelectPath}
          >
            <span>选择目录</span>
            <input
              className={styles.file}
              ref={(input) => {
                this.input = input
                // @see https://github.com/facebook/react/issues/3468
                if (this.input) {
                  this.input.setAttribute('webkitdirectory', true)
                }
              }}
              type="file"
              onChange={(e) => {
                this.setState({
                  value: e.target.files[0].path,
                })
                this.onVerify(e.target.files[0].path, validate)
              }}
            />
          </button>
        </div>
      )
    }
    return (
      <input
        className={cx(styles.input, { [styles.hightLight]: isLight })}
        type="text"
        value={value}
        maxLength="15"
        onChange={e => this.setState({ value: e.target.value })}
        onBlur={e => this.onVerify(e.target.value, validate)}
      />
    )
  }

  render() {
    const { className, label } = this.props

    return (
      <div className={cx(className, styles.root)}>
        <span className={styles.label}>{label}：</span>
        {this.renderInput()}
      </div>
    )
  }
}

export default FormItem
