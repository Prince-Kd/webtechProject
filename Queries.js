import gql from 'graphql-tag'; 

const MEMBERPROFILE = gql`
	{
		memberProfile{
			age
			gender
			lastCountriesVisited
		}
	}
`;


const REPORTED_CASES = gql`
	query reportedCases($user: ID!){
	  reportedCases(filter: {user: $user}){
	    _id
	    user{
	      phone
	    }
	    reporting
	    location  
	    nearestLandmark  
	    alternateContact  
	    description  
	    createdAt    
	    updatedAt
	 	}
	}
`;

export {MEMBERPROFILE, REPORTED_CASES}