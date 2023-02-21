export const useMessageCreator = (arr) => {
  const str = arr.map(icon => icon.value).join('')
  
  switch (str) {       
    case '111111':
      return 'NINJA'
    
    case '222222':
      return 'DOUBLEDRAGON'

    default:
      return false
  }
}
