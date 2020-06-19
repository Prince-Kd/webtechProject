import gql from 'graphql-tag';

const LoginUser = gql`
	mutation LoginUser($phone: String!){
		loginUser(input: {phone: $phone}){
			success
			message
		}
	}
`;

