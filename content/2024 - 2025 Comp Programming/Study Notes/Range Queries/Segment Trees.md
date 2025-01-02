


```cpp
struct item{
    ll num;
};
 
struct segtree{
    int sz;
    vector <item> val; // store sum of nodes    
    item neutral = 0; // EMPTY SEGMENT: we can add this element 
    // to anything and get the original result 
    item merge(item a, item b){ // merge two nodes( their items)
        return  a.num + b.num; // use formula to merge two items   
    }
    item single(ll v){ // we are left with single node( base case)
        return v; 
    }

    void init(int n){ // create empty segtree with length at least n increased to closest power of 2(for leaves of binary tree)
        sz = 1;
        while(sz < n){
            sz *= 2;
        }
        val.assign(2*sz,neutral); // create empty segtree size 2*sz and fill with 0s
    }
    void set(int i, ll u){
        set(i,u,0,0,sz);
    }
    void set(int i, ll u, int x, int lx, int rx){
        if(rx-lx==1){ // current node is a leaf
            val[x] = single(u);
            return;
        }
        int m = (lx+rx)/2; // mid
        if(i < m){ // left subtree
            set(i, u, 2*x+1,lx,m);
        }
        else{ // right subtree
            set(i, u, 2*x+2,m,rx);
        }
        val[x] = merge(val[2*x+1], val[2*x+2]);
    }
    item query(int l, int r){
        return query(l,r,0,0,sz);
    }
    item query(int l, int r, int x, int lx, int rx){
        if(r <= lx || rx <= l){ // outside range
            return neutral;
        }
        if(l <= lx && rx <= r){ // inside range
            return val[x];
        }
        int m = (lx+rx)/2;
        item osa = query(l,r,2*x+1,lx,m);
        item nosa = query(l,r,2*x+2,m,rx);
        return merge(osa, nosa);
    }
 
};
```