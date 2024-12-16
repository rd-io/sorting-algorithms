local sorting = require "lua-sorting/bubble"

local array = {5,2,1,3,4}
local sortedArray = sorting.bubble(array)

local function printArrays(inputArray)
    local res = ""

    for i = 1, #inputArray -1 do
        res = res .. inputArray[i] .. ", "
    end

    res = res .. inputArray[#inputArray]
    return res
end

print("\nStarting values: " .. printArrays(array))
print("Ending values: " .. printArrays(sortedArray) .. "\n")
