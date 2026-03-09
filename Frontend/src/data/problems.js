export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> n1 = {2,7,11,15}; auto r1 = twoSum(n1, 9);
    cout << "[" << r1[0] << "," << r1[1] << "]" << endl; // Expected: [0,1]
    vector<int> n2 = {3,2,4};     auto r2 = twoSum(n2, 6);
    cout << "[" << r2[0] << "," << r2[1] << "]" << endl; // Expected: [1,2]
    vector<int> n3 = {3,3};       auto r3 = twoSum(n3, 6);
    cout << "[" << r3[0] << "," << r3[1] << "]" << endl; // Expected: [0,1]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "[0,1]\n[1,2]\n[0,1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
    
}

int main() {
    vector<char> t1 = {'h','e','l','l','o'};
    reverseString(t1);
    cout << "["; for(int i=0;i<t1.size();i++){cout<<t1[i];if(i+1<t1.size())cout<<",";}cout<<"]"<<endl;

    vector<char> t2 = {'H','a','n','n','a','h'};
    reverseString(t2);
    cout << "["; for(int i=0;i<t2.size();i++){cout<<t2[i];if(i+1<t2.size())cout<<",";}cout<<"]"<<endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      cpp: "[o,l,l,e,h]\n[h,a,n,n,a,H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << (isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl; // true
    cout << (isPalindrome("race a car") ? "true" : "false") << endl; // false
    cout << (isPalindrome(" ") ? "true" : "false") << endl; // true
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxSubArray(vector<int>& nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<int> n1 = {-2,1,-3,4,-1,2,1,-5,4}; cout << maxSubArray(n1) << endl; // 6
    vector<int> n2 = {1};                       cout << maxSubArray(n2) << endl; // 1
    vector<int> n3 = {5,4,-1,7,8};              cout << maxSubArray(n3) << endl; // 23
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      cpp: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<int> h1 = {1,8,6,2,5,4,8,3,7}; cout << maxArea(h1) << endl; // 49
    vector<int> h2 = {1,1};                cout << maxArea(h2) << endl; // 1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "49\n1",
    },
  },

  // ─── 10 NEW PROBLEMS ──────────────────────────────────────────────────────────

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Sliding Window",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      notes: [
        "Return the maximum profit you can achieve from this transaction.",
        "If you cannot achieve any profit, return 0.",
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "In this case, no transactions are done and the max profit = 0.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1]));   // Expected: 0
console.log(maxProfit([2,4,1]));        // Expected: 2`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))    # Expected: 0
print(maxProfit([2,4,1]))         # Expected: 2`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));   // Expected: 0
        System.out.println(maxProfit(new int[]{2,4,1}));        // Expected: 2
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<int> p1 = {7,1,5,3,6,4}; cout << maxProfit(p1) << endl; // 5
    vector<int> p2 = {7,6,4,3,1};   cout << maxProfit(p2) << endl; // 0
    vector<int> p3 = {2,4,1};        cout << maxProfit(p3) << endl; // 2
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n0\n2",
      python: "5\n0\n2",
      java: "5\n0\n2",
      cpp: "5\n0\n2",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if: open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.",
        "Every close bracket has a corresponding open bracket of the same type.",
      ],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()"));     // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]"));     // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))      # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))      # Expected: False`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()"));     // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]"));     // Expected: false
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << (isValid("()") ? "true" : "false") << endl;     // true
    cout << (isValid("()[]{}") ? "true" : "false") << endl; // true
    cout << (isValid("(]") ? "true" : "false") << endl;     // false
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      cpp: "true\ntrue\nfalse",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List • Recursion",
    description: {
      text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
      notes: ["Return the head of the merged linked list."],
    },
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]",
      },
      {
        input: "list1 = [], list2 = [0]",
        output: "[0]",
      },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50]",
      "-100 ≤ Node.val ≤ 100",
      "Both list1 and list2 are sorted in non-decreasing order",
    ],
    starterCode: {
      javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let cur = dummy;
  for (let v of arr) { cur.next = new ListNode(v); cur = cur.next; }
  return dummy.next;
}

function listToArray(head) {
  let res = [];
  while (head) { res.push(head.val); head = head.next; }
  return res;
}

function mergeTwoLists(list1, list2) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(listToArray(mergeTwoLists(arrayToList([1,2,4]), arrayToList([1,3,4]))))); // [1,1,2,3,4,4]
console.log(JSON.stringify(listToArray(mergeTwoLists(null, null))));                                 // []
console.log(JSON.stringify(listToArray(mergeTwoLists(null, arrayToList([0])))));                     // [0]`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def arrayToList(arr):
    dummy = ListNode(0)
    cur = dummy
    for v in arr:
        cur.next = ListNode(v)
        cur = cur.next
    return dummy.next

def listToArray(head):
    res = []
    while head:
        res.append(head.val)
        head = head.next
    return res

def mergeTwoLists(list1, list2):
    # Write your solution here
    pass

# Test cases
print(listToArray(mergeTwoLists(arrayToList([1,2,4]), arrayToList([1,3,4]))))  # [1,1,2,3,4,4]
print(listToArray(mergeTwoLists(None, None)))                                  # []
print(listToArray(mergeTwoLists(None, arrayToList([0]))))                      # [0]`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static ListNode arrayToList(int[] arr) {
        ListNode dummy = new ListNode(0);
        ListNode cur = dummy;
        for (int v : arr) { cur.next = new ListNode(v); cur = cur.next; }
        return dummy.next;
    }

    public static String listToString(ListNode head) {
        StringBuilder sb = new StringBuilder("[");
        while (head != null) {
            sb.append(head.val);
            if (head.next != null) sb.append(",");
            head = head.next;
        }
        return sb.append("]").toString();
    }

    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        
        return null;
    }

    public static void main(String[] args) {
        System.out.println(listToString(mergeTwoLists(arrayToList(new int[]{1,2,4}), arrayToList(new int[]{1,3,4})))); // [1,1,2,3,4,4]
        System.out.println(listToString(mergeTwoLists(null, null)));                                                    // []
        System.out.println(listToString(mergeTwoLists(null, arrayToList(new int[]{0}))));                               // [0]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int v) : val(v), next(nullptr) {}
};

ListNode* arrayToList(vector<int> arr) {
    ListNode dummy(0); ListNode* cur = &dummy;
    for (int v : arr) { cur->next = new ListNode(v); cur = cur->next; }
    return dummy.next;
}

string listToString(ListNode* head) {
    string s = "[";
    while (head) { s += to_string(head->val); if(head->next) s+=","; head = head->next; }
    return s + "]";
}

ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    // Write your solution here
    
    return nullptr;
}

int main() {
    cout << listToString(mergeTwoLists(arrayToList({1,2,4}), arrayToList({1,3,4}))) << endl; // [1,1,2,3,4,4]
    cout << listToString(mergeTwoLists(nullptr, nullptr)) << endl;                           // []
    cout << listToString(mergeTwoLists(nullptr, arrayToList({0}))) << endl;                  // [0]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]\n[]\n[0]",
      python: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
      java: "[1,1,2,3,4,4]\n[]\n[0]",
      cpp: "[1,1,2,3,4,4]\n[]\n[0]",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming • Math",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      notes: [],
    },
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways to climb to the top: 1 step + 1 step, or 2 steps.",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways: 1+1+1, 1+2, 2+1.",
      },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2));  // Expected: 2
console.log(climbStairs(3));  // Expected: 3
console.log(climbStairs(10)); // Expected: 89`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))   # Expected: 2
print(climbStairs(3))   # Expected: 3
print(climbStairs(10))  # Expected: 89`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(climbStairs(2));  // Expected: 2
        System.out.println(climbStairs(3));  // Expected: 3
        System.out.println(climbStairs(10)); // Expected: 89
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << climbStairs(2)  << endl; // 2
    cout << climbStairs(3)  << endl; // 3
    cout << climbStairs(10) << endl; // 89
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n89",
      python: "2\n3\n89",
      java: "2\n3\n89",
      cpp: "2\n3\n89",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation: "9 exists in nums and its index is 4.",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
        explanation: "2 does not exist in nums so return -1.",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁴",
      "-10⁴ < nums[i], target < 10⁴",
      "All the integers in nums are unique",
      "nums is sorted in ascending order",
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9));  // Expected: 4
console.log(search([-1,0,3,5,9,12], 2));  // Expected: -1
console.log(search([5], 5));               // Expected: 0`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))   # Expected: 4
print(search([-1,0,3,5,9,12], 2))   # Expected: -1
print(search([5], 5))                # Expected: 0`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9));  // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2));  // Expected: -1
        System.out.println(search(new int[]{5}, 5));               // Expected: 0
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    
    return -1;
}

int main() {
    vector<int> n1 = {-1,0,3,5,9,12}; cout << search(n1, 9) << endl;  // 4
    vector<int> n2 = {-1,0,3,5,9,12}; cout << search(n2, 2) << endl;  // -1
    vector<int> n3 = {5};              cout << search(n3, 5) << endl;  // 0
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n0",
      python: "4\n-1\n0",
      java: "4\n-1\n0",
      cpp: "4\n-1\n0",
    },
  },

  "majority-element": {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: "Array • Hash Table • Sorting",
    description: {
      text: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.",
      notes: [
        "You may assume that the majority element always exists in the array.",
        "Try to solve it in O(n) time and O(1) space using Boyer-Moore Voting Algorithm.",
      ],
    },
    examples: [
      {
        input: "nums = [3,2,3]",
        output: "3",
      },
      {
        input: "nums = [2,2,1,1,1,2,2]",
        output: "2",
      },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 5 * 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function majorityElement(nums) {
  // Write your solution here
  
}

// Test cases
console.log(majorityElement([3,2,3]));           // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2]));   // Expected: 2
console.log(majorityElement([1]));                // Expected: 1`,
      python: `def majorityElement(nums):
    # Write your solution here
    pass

# Test cases
print(majorityElement([3,2,3]))          # Expected: 3
print(majorityElement([2,2,1,1,1,2,2]))  # Expected: 2
print(majorityElement([1]))               # Expected: 1`,
      java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3,2,3}));          // Expected: 3
        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2}));  // Expected: 2
        System.out.println(majorityElement(new int[]{1}));               // Expected: 1
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int majorityElement(vector<int>& nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<int> n1 = {3,2,3};          cout << majorityElement(n1) << endl; // 3
    vector<int> n2 = {2,2,1,1,1,2,2}; cout << majorityElement(n2) << endl; // 2
    vector<int> n3 = {1};              cout << majorityElement(n3) << endl; // 1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n2\n1",
      python: "3\n2\n1",
      java: "3\n2\n1",
      cpp: "3\n2\n1",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table • Sorting",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1,2,3,1]));           // Expected: true
console.log(containsDuplicate([1,2,3,4]));           // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))            # Expected: True
print(containsDuplicate([1,2,3,4]))            # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) # Expected: True`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));              // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));              // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    
    return false;
}

int main() {
    vector<int> n1 = {1,2,3,1};              cout << (containsDuplicate(n1) ? "true" : "false") << endl; // true
    vector<int> n2 = {1,2,3,4};              cout << (containsDuplicate(n2) ? "true" : "false") << endl; // false
    vector<int> n3 = {1,1,1,3,3,4,3,2,4,2}; cout << (containsDuplicate(n3) ? "true" : "false") << endl; // true
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
      notes: ["Note that you must do this in-place without making a copy of the array."],
    },
    examples: [
      {
        input: "nums = [0,1,0,3,12]",
        output: "[1,3,12,0,0]",
      },
      {
        input: "nums = [0]",
        output: "[0]",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here (in-place)
  
}

// Test cases
let t1 = [0,1,0,3,12]; moveZeroes(t1); console.log(t1); // Expected: [1,3,12,0,0]
let t2 = [0];           moveZeroes(t2); console.log(t2); // Expected: [0]
let t3 = [1,0,1];       moveZeroes(t3); console.log(t3); // Expected: [1,1,0]`,
      python: `def moveZeroes(nums):
    # Write your solution here (in-place)
    pass

# Test cases
t1 = [0,1,0,3,12]; moveZeroes(t1); print(t1)  # Expected: [1, 3, 12, 0, 0]
t2 = [0];           moveZeroes(t2); print(t2)  # Expected: [0]
t3 = [1,0,1];       moveZeroes(t3); print(t3)  # Expected: [1, 1, 0]`,
      java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here (in-place)
        
    }
    
    public static void main(String[] args) {
        int[] t1 = {0,1,0,3,12}; moveZeroes(t1); System.out.println(Arrays.toString(t1)); // [1, 3, 12, 0, 0]
        int[] t2 = {0};           moveZeroes(t2); System.out.println(Arrays.toString(t2)); // [0]
        int[] t3 = {1,0,1};       moveZeroes(t3); System.out.println(Arrays.toString(t3)); // [1, 1, 0]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

void moveZeroes(vector<int>& nums) {
    // Write your solution here (in-place)
    
}

void printVec(vector<int>& v) {
    cout << "["; for(int i=0;i<v.size();i++){cout<<v[i];if(i+1<v.size())cout<<",";}cout<<"]"<<endl;
}

int main() {
    vector<int> t1={0,1,0,3,12}; moveZeroes(t1); printVec(t1); // [1,3,12,0,0]
    vector<int> t2={0};           moveZeroes(t2); printVec(t2); // [0]
    vector<int> t3={1,0,1};       moveZeroes(t3); printVec(t3); // [1,1,0]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,3,12,0,0]\n[0]\n[1,1,0]",
      python: "[1, 3, 12, 0, 0]\n[0]\n[1, 1, 0]",
      java: "[1, 3, 12, 0, 0]\n[0]\n[1, 1, 0]",
      cpp: "[1,3,12,0,0]\n[0]\n[1,1,0]",
    },
  },

  "longest-common-prefix": {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: "String • Trie",
    description: {
      text: "Write a function to find the longest common prefix string amongst an array of strings.",
      notes: ["If there is no common prefix, return an empty string \"\"."],
    },
    examples: [
      {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"',
      },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation: "There is no common prefix among the input strings.",
      },
    ],
    constraints: ["1 ≤ strs.length ≤ 200", "0 ≤ strs[i].length ≤ 200", "strs[i] consists of only lowercase English letters"],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
  
}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // Expected: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // Expected: ""
console.log(longestCommonPrefix(["interview","inter","internal"])); // Expected: "inter"`,
      python: `def longestCommonPrefix(strs):
    # Write your solution here
    pass

# Test cases
print(longestCommonPrefix(["flower","flow","flight"]))          # Expected: "fl"
print(longestCommonPrefix(["dog","racecar","car"]))             # Expected: ""
print(longestCommonPrefix(["interview","inter","internal"]))    # Expected: "inter"`,
      java: `class Solution {
    public static String longestCommonPrefix(String[] strs) {
        // Write your solution here
        
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(longestCommonPrefix(new String[]{"flower","flow","flight"}));        // fl
        System.out.println(longestCommonPrefix(new String[]{"dog","racecar","car"}));           // ""
        System.out.println(longestCommonPrefix(new String[]{"interview","inter","internal"}));  // inter
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

string longestCommonPrefix(vector<string>& strs) {
    // Write your solution here
    
    return "";
}

int main() {
    vector<string> s1 = {"flower","flow","flight"};       cout << longestCommonPrefix(s1) << endl; // fl
    vector<string> s2 = {"dog","racecar","car"};          cout << longestCommonPrefix(s2) << endl; // (empty)
    vector<string> s3 = {"interview","inter","internal"}; cout << longestCommonPrefix(s3) << endl; // inter
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "fl\n\ninter",
      python: "fl\n\ninter",
      java: "fl\n\ninter",
      cpp: "fl\n\ninter",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["Notice that the solution set must not contain duplicate triplets."],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "The distinct triplets are [-1,-1,2] and [-1,0,1].",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
        explanation: "The only possible triplet does not sum up to 0.",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
        explanation: "The only possible triplet sums up to 0.",
      },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]))); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(threeSum([0,1,1])));           // Expected: []
console.log(JSON.stringify(threeSum([0,0,0])));           // Expected: [[0,0,0]]`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))            # Expected: []
print(threeSum([0,0,0]))            # Expected: [[0,0,0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // [[-1, -1, 2], [-1, 0, 1]]
        System.out.println(threeSum(new int[]{0,1,1}));           // []
        System.out.println(threeSum(new int[]{0,0,0}));           // [[0, 0, 0]]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    
    return {};
}

void printResult(vector<vector<int>>& res) {
    cout << "[";
    for(int i=0;i<res.size();i++){
        cout<<"[";
        for(int j=0;j<res[i].size();j++){cout<<res[i][j];if(j+1<res[i].size())cout<<",";}
        cout<<"]"; if(i+1<res.size())cout<<",";
    }
    cout<<"]"<<endl;
}

int main() {
    vector<int> n1={-1,0,1,2,-1,-4}; auto r1=threeSum(n1); printResult(r1); // [[-1,-1,2],[-1,0,1]]
    vector<int> n2={0,1,1};           auto r2=threeSum(n2); printResult(r2); // []
    vector<int> n3={0,0,0};           auto r3=threeSum(n3); printResult(r3); // [[0,0,0]]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]',
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      cpp: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};