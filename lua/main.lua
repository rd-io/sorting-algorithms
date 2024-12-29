-- local bubbleSort = require "lua-sorting/bubble"
-- local selectionSort = require "lua-sorting/selection"
local insertionSort = require "lua-sorting/insertion"

local array = {5,1,3,4,8,6,7,2,10,9}
-- local array = {1,2,3,4,5,6,7,9,10,8}

-- local sortedArray = bubbleSort.bubble(array)
-- local sortedArray = selectionSort.selection(array)
local sortedArray = insertionSort.insertion(array)


local function printArrays(inputArray)
    local res = ""
    for i = 1, #inputArray -1 do
        res = res .. inputArray[i] .. ", "
    end
    res = res .. inputArray[#inputArray]
    return res
end


print("\nStarting values: " .. printArrays(array))
print("Ending values: " .. printArrays(sortedArray))

-- print("This was completed in " .. bubbleSort.swaps .. " swaps and ".. bubbleSort.checks .. " checks.\n")
-- print("This was completed in " .. selectionSort.swaps .. " swaps and ".. selectionSort.checks .. " checks.\n")
print("This was completed in " .. insertionSort.swaps .. " swaps and " .. insertionSort.checks .. " checks.\n")


--[[

RESULTS

            Unsorted
-----------------------------------
Bubble: 12 swaps and 45 checks
Selection: 4 swaps and 45 checks
Insertion: 12 swaps and 20 checks


          Almost Sorted
-----------------------------------
Bubble: 2 swaps and 45 checks
Selection: 2 swaps and 45 checks
Insertion: 2 swaps and 11 checks

]]
