package com.example.locationapp

import androidx.fragment.app.testing.launchFragmentInContainer
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.*

import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class LocationListFragmentTest {

    @Test
    fun testLocationListDisplay() {
        // Launch the LocationListFragment
        val scenario = launchFragmentInContainer<LocationListFragment>()

        // Check if the first location name is displayed correctly
        onView(withId(R.id.locationNameTextView))
            .check(matches(withText("Location 1")))

        // Check if the first location description is displayed correctly
        onView(withId(R.id.locationDescriptionTextView))
            .check(matches(withText("Description 1")))

        // Check if the first location coordinates are displayed correctly
        onView(withId(R.id.locationCoordinatesTextView))
            .check(matches(withText("Coordinates: 37.7749, -122.4194")))

        // Check if the second location name is displayed correctly
        onView(withId(R.id.locationNameTextView))
            .check(matches(withText("Location 2")))

        // Check if the second location description is displayed correctly
        onView(withId(R.id.locationDescriptionTextView))
            .check(matches(withText("Description 2")))

        // Check if the second location coordinates are displayed correctly
        onView(withId(R.id.locationCoordinatesTextView))
            .check(matches(withText("Coordinates: 34.0522, -118.2437")))
    }
}
