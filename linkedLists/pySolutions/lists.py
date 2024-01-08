class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def print_list(head):
    if not head:
        return None

    curr = head
    while curr:
        print(curr.val)
        curr = curr.next