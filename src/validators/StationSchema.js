
import * as yup from 'yup'

const isRequiredMessage = 'Field required.'

export const validationStationSchema = yup.object({
    place:yup.string().required(isRequiredMessage),
    latitude:yup.number().min(-90).max(90).required('The latitude range must be between -90 and 90 and must be required.'),
    longitude:yup.number().min(-180).max(180).required('The longitude range must be between -180 and 180 and must be required.'),
  })