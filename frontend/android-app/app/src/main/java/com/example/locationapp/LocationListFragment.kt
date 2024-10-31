package com.example.locationapp

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.fragment_location_list.*

class LocationListFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_location_list, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Assuming you have a Location data class and a method to get the list of locations
        val locations = getLocations()

        locationRecyclerView.layoutManager = LinearLayoutManager(context)
        locationRecyclerView.adapter = LocationAdapter(locations)
    }

    private fun getLocations(): List<Location> {
        // Replace this with your actual implementation to get the list of locations
        return listOf(
            Location("Location 1", "Description 1", Coordinates(37.7749, -122.4194)),
            Location("Location 2", "Description 2", Coordinates(34.0522, -118.2437))
        )
    }

    data class Location(val name: String, val description: String, val coordinates: Coordinates)
    data class Coordinates(val latitude: Double, val longitude: Double)
}
