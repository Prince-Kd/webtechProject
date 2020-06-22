import gql from 'graphql-tag';

const LoginUser = gql`
	mutation loginUser($phone: String!){
		loginUser(input: {phone: $phone}){
			success
			message
		}
	}
`;

const VALIDATE = gql`mutation validateLoginUser($phone: String!, $otp: String!){
  validateLoginUser(input: { phone: $phone, otp: $otp }) {
    user {
      _id
      lastName
      otherNames
      gender
      age
      notificationToken
      lastCountriesVisited
      arrivalDate
      nationalID
      phone
      bluetoothID
      platform
      caseName
      region
      infectionStatus
      caseStatus
      licenseNumber
    }
    mobileToken
    createdAt
    updatedAt
  }
}
`;

const Report_Case = gql`
	mutation reportCase(
		$reporting:String!,
		$location:String!,
		$nearestLandmrk:String!,
		$alternateContact:String!,
		$description:String!
		)
		{
			reportCase(input:{
				reporting: $reporting, 
				location:$location,
				nearestLandmrk:$nearestLandmrk,
				alternateContact:$alternateContact,
				description:$description
			})
			{
				_id
				user{
					 _id
				      lastName
				      otherNames
				      gender
				      age
				      notificationToken
				      lastCountriesVisited
				      arrivalDate
				      nationalID
				      phone
				      bluetoothID
				      platform
				      caseName
				      region
				      infectionStatus
				      caseStatus
				      licenseNumber
				}
				reporting
				location
				nearestLandmrk
				alternateContact
				description
				createdAt
				updatedAt
			}

		}

`;

const editUserProfileInput = gql`
	mutation editUserProfileInput(
		$lastName: String!
		$otherNames: String!
		$age: Int
		$gender: String!
		$notificationToken: String!
		$nationalID: String!
		$lastCountriesVisited: [String!]
		$arrivalDate: Date
		$phone: String!
		$bluetoothID: String!
		$platform: Platform
		$caseName: String!
		$licenseNumber: String!
	){
		editUserProfile(
			input: {
				lastName: $lastName
			  	otherNames: $otherNames
			  	age: $age
			  	gender: $gender
			  	notificationToken: $notificationToken
			 	nationalID: $nationalID
			  	lastCountriesVisited: [$lastCountriesVisited]
			  	arrivalDate: $arrivalDate
			  	phone: $phone
			  	bluetoothID: $bluetoothID
			  	platform: $platform
			  	caseName: $caseName
			  	licenseNumber: $licenseNumber
			})
	}
`;

export {LoginUser, editUserProfileInput, Report_Case, VALIDATE}
