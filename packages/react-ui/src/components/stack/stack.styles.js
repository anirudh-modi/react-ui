export const styles = {
  Stack: props => ({
    display: props.inline ? 'inline-flex' : 'flex',
    justifyContent: props.justify,
    alignItems: props.align,
    flexDirection: props.direction === 'vertical' ? 'column' : 'row',
    '> *:not(:last-child)': {
      [props.direction === 'vertical'
        ? 'marginBottom'
        : 'marginRight']: props.gap
    }
  })
}
