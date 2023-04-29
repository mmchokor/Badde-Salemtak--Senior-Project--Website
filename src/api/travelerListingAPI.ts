import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '../constants/apiURL';

//Get all the Traveler Listings
export const getTravelerListings = async () => {
	const token = await AsyncStorage.getItem('token');
	try {
		const response = await axios.get(`${API_URL}/traveler`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

//Get traveler listing by ID
export const getTravelerListingsById = async (id, token) => {
	try {
		const response = await axios.get(`${API_URL}/traveler/:${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

//Delete Traveler Listing by ID
export const deleteTravelerListingByID = async (id, token) => {
	try {
		const response = await axios.delete(`${API_URL}/resident/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data.status;
	} catch (error) {
		throw error;
	}
};
//Update Traveler Listing by ID
export const updateTravelerListingByID = async (id, data) => {
	try {
		const response = await axios.patch(`${API_URL}/traveler/${id}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

//Create Traveler Listing
export const createTravelerListing = async (data) => {
	const token = await AsyncStorage.getItem('token');
	try {
		const response = await axios.post(`${API_URL}/traveler`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'multipart/form-data',
			},
		});
		return response;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to add traveler listing' + error);
	}
};
