import gql from 'graphql-tag'; 

const memberProfile = gql`
	{
		memberProfile{
			age
			gender
			lastCountriesVisited
		}
	}
`;