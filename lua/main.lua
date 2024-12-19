-- local bubbleSort = require "lua-sorting/bubble"
-- local selectionSort = require "lua-sorting/selection"
local insertionSort = require "lua-sorting/insertion"

local array = {5,1,3,4,8,6,7,2,10,9}
-- local array = {5,1}

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

-- print("This was completed in " .. bubbleSort.steps .. " steps and ".. bubbleSort.swaps .. " swaps..\n")
-- print("This was completed in " .. selectionSort.steps .. " steps and ".. selectionSort.swaps .. " swaps..\n")
print("This was completed in " .. insertionSort.steps .. " steps and " .. insertionSort.swaps .. " swaps..\n")
