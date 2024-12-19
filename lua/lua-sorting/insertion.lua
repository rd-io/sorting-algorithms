local deepClone = require "functions/deepClone"

local sort = {}

sort.steps = 0
sort.swaps = 0

function sort.insertion(array)
    print("\nInsertion Sort")

local function printArrays(inputArray)
    local res = ""
    for i = 1, #inputArray -1 do
        res = res .. inputArray[i] .. ", "
    end
    res = res .. inputArray[#inputArray]
    return res
end

    local newArray = deepClone(array)

    for i = 2, #newArray, 1 do
        print(printArrays(newArray), i)
        for j = i, #newArray, -1 do
            sort.steps = sort.steps + 1
            if(newArray[j-1] > newArray[j]) then
                newArray[j-1] = newArray[j-1] + newArray[j]
                newArray[j] = newArray[j-1] - newArray[j]
                newArray[j-1] = newArray[j-1] - newArray[j]
                sort.swaps = sort.swaps + 1
            else
                break
            end
        end
    end
    return newArray
end

return sort
