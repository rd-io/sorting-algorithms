local bubbleSort = require "lua-sorting/bubble"
local selectionSort = require "lua-sorting/selection"

local array = {5,1,3,4,8,6,7,2,10,9}

-- local sortedArray = bubbleSort.bubble(array)
local sortedArray = selectionSort.selection(array)

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
print("This was completed in " .. selectionSort.steps .. " steps.\n")
